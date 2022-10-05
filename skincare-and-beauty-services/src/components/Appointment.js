//FOR ADMIN//FOR ADMIN ONLY

import React from "react";
import PropTypes from "prop-types";

function Appointment(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenTicketClicked(props.id)}>
        <h3>{props.firstName} {props.lastName}</h3>
        <p>{props.date} at {props.time}</p>
        <p><em>{props.serviceType}</em></p>
        <p>Additional Information:</p>
        <p>{props.additionalInfo}</p> 
        <hr/>
      </div>
    </React.Fragment>
  );
}

Appointment.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  serviceType: PropTypes.string,
  additionalInfo: PropTypes.string,
  whenAppointmentClicked: PropTypes.func
}

export default Appointment;