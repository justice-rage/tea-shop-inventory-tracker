import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";

function TeaList(props){
  return (
      <React.Fragment>
        <hr />
      {props.teaList.map((tea, index) =>
        <Tea names={tea.names}
          origin={tea.origin}
          price={tea.price}
          key={index} />
      )}
      </React.Fragment>
  );
}

TeaList.propTypes = {
    teaList: PropTypes.array
  };

export default TeaList;