//Parent
import React, { useEffect, useState } from 'react';
import AppointmentForm from './AppointmentForm';
import Home from './Home';
import Navbar from './Navbar';
import AppointmentList from './AppointmentList';
import AppointmentDetail from './AppointmentDetail';
import db from './../firebase.js'
import { collection, addDoc, onSnapshot } from "firebase/firestore";
// import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc, query, orderBy } from "firebase/firestore";
// import { db, auth } from './../firebase.js';
// import { formatDistanceToNow } from 'date-fns';

function AppointmentControl() {
  //useState
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainAppointmentList, setMainAppointmentList] = useState([]);
  // const [selectedTicket, setSelectedTicket] = useState(null);
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

  console.log(mainAppointmentList);


  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage);
    // console.log(mainAppointmentList)
  }


  const returnHome= () => {
    setFormVisibleOnPage(false);
  }

  //firebase POST request | Function above refactored
  const handleAddingAppointmentToList = async (newAppointmentData) => {
    setFormVisibleOnPage(false);
    await addDoc(collection(db, "appointments"), newAppointmentData);
  }


  if (error) {
    currentlyVisibleState = <p>There was an error: {error}</p>
  } else if (formVisibleOnPage) {
    currentlyVisibleState = 
      <AppointmentForm 
        handleClick={handleClick}
        onAppointmentCreation={handleAddingAppointmentToList}/>;
  } else {
    currentlyVisibleState = 
      <Home 
      handleClick={handleClick}/>;

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