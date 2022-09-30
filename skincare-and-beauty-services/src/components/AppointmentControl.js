//Parent
import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';
import Home from './Home';
import AppointmentList from './AppointmentList';
import AppointmentDetail from './AppointmentDetail';
// import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc, query, orderBy } from "firebase/firestore";
// import { db, auth } from './../firebase.js';
// import { formatDistanceToNow } from 'date-fns';

function AppointmentControl() {
  //useState
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainAppointmentList, setMainAppointmentList] = useState([]);
  
  //set form visible to true temporarily 
  // setFormVisibleOnPage(true);
  
  let currentlyVisibleState = null;


  const handleAddingAppointmentToList = (newAppointment) => {
    const newMainAppointmentList = mainAppointmentList.concat(newAppointment);
    setMainAppointmentList(newMainAppointmentList);
    setFormVisibleOnPage(false)
  }

  // const handleAddingNewTicketToList = (newTicket) => {
  //   // new code!
  //   const newMainTicketList = mainTicketList.concat(newTicket);
  //   // new code!
  //   setMainTicketList(newMainTicketList);
  //   setFormVisibleOnPage(false)
  // }


  if (formVisibleOnPage) {
    currentlyVisibleState = 
    <AppointmentForm 
     onAppointmentCreation={handleAddingAppointmentToList}/>; 
  } else {
    currentlyVisibleState = <Home />;
  }
    

  return (
    <React.Fragment>
      {currentlyVisibleState}
    </React.Fragment>
  );


}  

export default AppointmentControl;