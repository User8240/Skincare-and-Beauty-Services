import React from "react";
import Header from "./Header";
import AppointmentControl from "./AppointmentControl";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App(){
  return (
    <Router> 
      {/* header is outside of the route so it shows no matter what url/route we are in */}
      <Header />
      {/* BELOW this lets us add multiple routes that have separate paths */}
      <Routes>
        {/* BELOW this lets us add the component the application should route to (as well as the corresponding path)*/}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<AppointmentControl />} />
        
      </Routes>
    </Router>
  );
}

export default App;
