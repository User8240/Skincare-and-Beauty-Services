import React from "react";
import PropTypes from "prop-types"; 
import { serverTimestamp } from "firebase/firestore";

function AppointmentForm(props){

  function handleAppointmentFormSubmission(event) {
    event.preventDefault();
    props.onAppointmentCreation({
      firstName: event.target.firstName.value, 
      lastName: event.target.lastName.value, 
      serviceType: event.target.serviceType.value, 
      date: event.target.date.value, 
      time: event.target.time.value,
      additionalInfo: event.target.additionalInfo.value,
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleAppointmentFormSubmission}>
        <input
          type='text'
          name='firstName'
          placeholder='First Name' />
        <input
          type='text'
          name='lastName'
          placeholder='Last Name' />
        <input
          type='text'
          name='serviceType'
          // BELOW: Update to a drop down menu *(client will be able to update drop down list)*
          placeholder="Choose A Service You'd Like Done" /> 
        <input
          type='text'
          name='date'
          // BELOW: Update to a drop down menu *(client will be able to update drop down list)*
          placeholder="Choose A Date" /> 
        <input
          type='text'
          name='time'
          // BELOW: Update to a drop down menu *(client will be able to update drop down list)*
          placeholder="Choose A Time" /> 
        <textarea
          name='additionalInfo'
          placeholder="Anything else you'd like me to know?" />
        <button type='submit'>Schedule Appointment</button>
      </form>
    </React.Fragment>
  );
}

AppointmentForm.propTypes = {
  onAppointmentCreation: PropTypes.func
};

export default AppointmentForm;