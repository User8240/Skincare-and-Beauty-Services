//FOR ADMIN ONLY

import React from "react";
import PropTypes from "prop-types";

function AppointmentDetail(props){
  const { appointment, onAppointmentCompletion } = props; 


  return (
    <React.Fragment>
      <h1>{appointment.firstName} {appointment.lastName}'s Appointment Details</h1>

        <p>{appointment.date} at {appointment.time}</p>
        <p>Scheduled for <em>{appointment.serviceType}</em></p>
        <p>Additional Information:</p>
        <p>{appointment.additionalInfo}</p> 
        <hr/>

      <button onClick={()=> onAppointmentCompletion(appointment.id)}>Appointment Completed</button>
      <hr/>
    </React.Fragment>
  );
}

AppointmentDetail.propTypes = {
  appointment: PropTypes.object,
  onAppointmentCompletion: PropTypes.func
};


export default AppointmentDetail;