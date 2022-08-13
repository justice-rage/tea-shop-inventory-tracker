import React from "react";
import PropTypes from "prop-types";

function Tea(props){
  return (
    <React.Fragment>
      <h3>{props.names} - {props.origin}</h3>
      <h3>{props.price}</h3>
      <p><em></em></p>
      <hr/>
    </React.Fragment>
  );
}

Tea.propTypes = {
    names: PropTypes.string,
    origin: PropTypes.string,
    price: PropTypes.number
};

export default Tea;