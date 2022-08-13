import React from "react";

function Tea(){
    const teaName = "Green";
    const teaName2 = "Black";
  return (
    <React.Fragment>
      <h3>{teaName}</h3>
      <h3>{teaName2}</h3>
      <p><em></em></p>
      <hr/>
    </React.Fragment>
  );
}

export default Tea;