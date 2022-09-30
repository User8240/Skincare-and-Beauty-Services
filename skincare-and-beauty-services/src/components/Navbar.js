import React from "react";
import PropTypes from "prop-types";


function Navbar(props){
  const { returnHome } = props;

  return (
    <React.Fragment>
      <button onClick={returnHome}>HOME</button> 
    </React.Fragment>
  );
}

Navbar.propTypes = {
  returnHome: PropTypes.func
}

export default Navbar;