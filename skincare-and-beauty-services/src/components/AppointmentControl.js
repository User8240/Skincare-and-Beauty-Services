//Parent
import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';
import Home from './Home';
import Navbar from './Navbar';
import AppointmentList from './AppointmentList';
import AppointmentDetail from './AppointmentDetail';
import db from './../firebase.js'
import { collection, addDoc } from "firebase/firestore";
// import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc, query, orderBy } from "firebase/firestore";
// import { db, auth } from './../firebase.js';
// import { formatDistanceToNow } from 'date-fns';

function AppointmentControl() {
  //useState
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainAppointmentList, setMainAppointmentList] = useState([]);
  
  let currentlyVisibleState = null;


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
    

  return (
    <React.Fragment>
      <Navbar 
        returnHome={returnHome}/>;
      {currentlyVisibleState}
    </React.Fragment>
  );

}  

export default AppointmentControl;