import React from "react";
import PropTypes from "prop-types";

function Home(props){
  const { handleClick } = props;

  return (
    <React.Fragment>
      <h1> HOMEPAGE </h1>
      {/* need to add a button that sets form visible on page to true */}
      <button onClick={handleClick}>Make an appointment</button> 
    </React.Fragment>
  );
}

Home.propTypes = {
  handleClick: PropTypes.func
}

export default Home;