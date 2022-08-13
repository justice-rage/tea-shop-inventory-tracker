import React from "react";
import Tea from "./Tea";

function TeaList(){
  return (
      <React.Fragment>
        <Tea 
            name="Green"
            origin="Vietnam"
            price={1} />
        <Tea 
            name="Black"
            origin="England"
            price={1} />
      </React.Fragment>
  );
}

export default TeaList;