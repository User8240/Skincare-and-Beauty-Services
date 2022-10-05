//FOR ADMIN ONLY
import React from "react";
import Appointment from "./Appointment";
import PropTypes from "prop-types";

function AppointmentList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.appointmentList.map((appointment) =>
        <Appointment 
          whenAppointmentClicked={props.onAppointmentSelection}
          firstName={appointment.firstName}
          lastName={appointment.lastName}
          serviceType={appointment.serviceType}
          date={appointment.date}
          time={appointment.time}
          additionalInfo={appointment.additionalInfo}
          id={appointment.id}
          key={appointment.id}/>
      )}
    </React.Fragment>
  );
}

AppointmentList.propTypes = {
  appointmentList: PropTypes.array,
  onAppointmentSelection: PropTypes.func
};

export default AppointmentList;