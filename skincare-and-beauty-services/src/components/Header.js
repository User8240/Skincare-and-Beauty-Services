import React from "react";
import { Link } from "react-router-dom";
import * as style from "../StyleComponents"

function Header(){
  return (
    <React.Fragment>
      <style.Header> 
        <h1 className="BIG">Skincare & Beauty Services</h1>
      </style.Header>      

      {/* <p> */}
      {/* BELOW: DELETE THESE LATER - HERE FOR TESTING PURPOSES */}
        {/* <Link to="/sign-in">Admin Sign In</Link> */}
      {/* </p> */}

    </React.Fragment>
  );
}

export default Header;