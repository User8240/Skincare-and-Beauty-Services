//Parent
import React, { useEffect, useState } from 'react';
import AppointmentForm from './AppointmentForm';
import Home from './Home';
import Navbar from './Navbar';
import AppointmentList from './AppointmentList';
import AppointmentDetail from './AppointmentDetail';
import db from './../firebase.js'
import { collection, addDoc, onSnapshot, deleteDoc, doc, query, orderBy } from "firebase/firestore";
// import { db, auth } from './../firebase.js';


function AppointmentControl() {
  //useState
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainAppointmentList, setMainAppointmentList] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [error, setError] = useState(null);
  
  let currentlyVisibleState = null;


//to listen to the list for every change made to the database
  useEffect(() => { 
    const unSubscribe = onSnapshot(
      collection(db, "appointments"), 
      (collectionSnapshot) => {
        // do something with appointment data
        const appointments = [];
        collectionSnapshot.forEach((doc) => {
            appointments.push({
              firstName: doc.data().firstName, 
              lastName: doc.data().lastName, 
              serviceType: doc.data().serviceType, 
              date: doc.data().date, 
              time: doc.data().time, 
              additionalInfo: doc.data().additionalInfo,
              id: doc.id
            });
        });
        setMainAppointmentList(appointments);
      }, 
      (error) => {
        setError(error.message); //have error handling on list component if list fails to GET
      }
    );

    return () => unSubscribe();
  }, []);

  // console.log(mainAppointmentList);

  // Toggle button toggles the form off and on to display Home OR AppointmentForm component
  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage);
  }

  // Home button force-displays the Home component (accessed in NavBar)
  const returnHome= () => {
    setFormVisibleOnPage(false);
  }

  //firebase POST request that adds data to database and display
  const handleAddingAppointmentToList = async (newAppointmentData) => {
    setFormVisibleOnPage(false);
    await addDoc(collection(db, "appointments"), newAppointmentData);
  }

// Based on the ID of a selected ticket (coming from detail page), this will delete the ticket from the database
  const handleDeletingAppointment = async (id) => {
    await deleteDoc(doc(db, "appointments", id));
    setSelectedAppointment(null);
  } 


  const handleSelectedAppointment = (id) => {
    const selection = mainAppointmentList.filter(appointment => appointment.id === id)[0];
    // new code!
    setSelectedAppointment(selection);
  }

  //FOR TESTING TICKET LISTS DISPLAY
  // currentlyVisibleState = 
  // <AppointmentList 
  // onAppointmentSelection = {handleSelectedAppointment}
  // appointmentList={mainAppointmentList} />;


if (auth.currentUser != null){
  // If the admin is signed in:
  // *cycle between admin components for the currentlyVisibleState*

  if (error) {
    currentlyVisibleState = <p>There was an error: {error}</p>
  } else if (selectedAppointment != null) {
    currentlyVisibleState = <AppointmentDetail 
    appointment={selectedAppointment} 
    onAppointmentCompletion={handleDeletingAppointment} />
    // buttonText = "Return to Ticket List";
  } else {
    currentlyVisibleState = 
    <AppointmentList 
    onAppointmentSelection = {handleSelectedAppointment}
    appointmentList={mainAppointmentList} />;
  }

  // other components to add?
  // new available time form?

} else if (auth.currentUser == null) {
  // If the admin is NOT signed in:
  // *cycle between user components for the currentlyVisibleState*

  if (formVisibleOnPage) {
    currentlyVisibleState = 
      <AppointmentForm 
        handleClick={handleClick}
        onAppointmentCreation={handleAddingAppointmentToList}/>;
  } else {
    currentlyVisibleState = 
      <Home 
      handleClick={handleClick}/>;
  }
}


  return (
    <React.Fragment>
      <Navbar 
        returnHome={returnHome}/>;
      {currentlyVisibleState}
    </React.Fragment>
  );

}  

export default AppointmentControl;