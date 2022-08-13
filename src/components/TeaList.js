import React from "react";
import Tea from "./Tea";

function TeaList(){
  return (
      <React.Fragment>
        <Tea 
            names="Green"
            origin="Vietnam"
            price={1} />
        <Tea 
            names="Black"
            origin="England"
            price={2} />
      </React.Fragment>
  );
}

export default TeaList;