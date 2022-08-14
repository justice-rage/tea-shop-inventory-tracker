import React from "react";
import PropTypes from "prop-types";

function Tea(props){
  return (
    <React.Fragment>
        <div onClick = {() => props.whenTeaClicked(props.id)}>
            <h3>Name: {props.names}</h3>
            <h3>Price: {props.price}</h3>
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