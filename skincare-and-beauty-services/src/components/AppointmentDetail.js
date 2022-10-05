//FOR ADMIN ONLY

import React from "react";
import PropTypes from "prop-types";

function AppointmentDetail(props){
  const { appointment } = props; 
  //LATER deconstruct onAppointmentCompletion - have to create this function first
  
  //IMPLEMENT DELETE FUNCTIONALITY LATER - OR WRITE FUNCTION TO DELETE APPOINTMENT AT A SPECIFIED TIME


  return (
    <React.Fragment>
      <h1>{props.firstName} {props.lastName}'s Appointment Details</h1>

        <p>{props.date} at {props.time}</p>
        <p>Scheduled for <em>{props.serviceType}</em></p>
        <p>Additional Information:</p>
        <p>{props.additionalInfo}</p> 
        <hr/>

      {/* <button onClick={()=> onAppointmentCompletion(appointment.id)}>Appointment Completed</button> */}
      <hr/>
    </React.Fragment>
  );
}

AppointmentDetail.propTypes = {
  appointment: PropTypes.object,
};

//LATER add onAppointmentCompletion (which was previously known as onClickingDelete)

export default AppointmentDetail;