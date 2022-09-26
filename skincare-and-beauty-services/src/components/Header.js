import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
      <h1> CLIENT-BUSINESS-NAME-HERE </h1>

      <p>
      {/* BELOW: DELETE THESE LATER - HERE FOR TESTING PURPOSES */}
      <Link to="/">Home</Link>
      <Link to="/sign-in">Admin Sign In</Link>
      </p>

    </React.Fragment>
  );
}

export default Header;