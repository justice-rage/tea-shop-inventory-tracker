import React from "react";
import PropTypes from "prop-types";

function Tea(props){
  return (
    <React.Fragment>
        <div onClick = {() => props.whenTeaClicked(props.id)}>
            <h3>{props.names} - {props.origin}</h3>
            <h3>{props.price}</h3>
            <p><em></em></p>
            <hr/>
        </div>
    </React.Fragment>
  );
}

Tea.propTypes = {
    names: PropTypes.string,
    origin: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    whenTeaClicked: PropTypes.func 
};

export default Tea;