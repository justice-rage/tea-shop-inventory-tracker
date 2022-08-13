import React from "react";

function Tea(props){
  return (
    <React.Fragment>
      <h3>{props.name} - {props.origin}</h3>
      <h3>{props.price}</h3>
      <p><em></em></p>
      <hr/>
    </React.Fragment>
  );
}

export default Tea;