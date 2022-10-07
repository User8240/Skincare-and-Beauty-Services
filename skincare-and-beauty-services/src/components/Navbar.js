import React from "react";
import PropTypes from "prop-types";
import * as style from "../StyleComponents"


function Navbar(props){
  const { returnHome } = props;

  return (
    <style.Navbar>
      <button className="button-center" onClick={returnHome}>HOME</button> 
    </style.Navbar>
  );
}

Navbar.propTypes = {
  returnHome: PropTypes.func
}

export default Navbar;