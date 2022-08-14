import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  const { tea, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Tea Detail</h1>
      <h3>Name: {tea.names}</h3>
      <h3>Origin: {tea.origin}</h3>
      <p>Price: {tea.price}</p>
      <button onClick={ props.onClickingEdit }>Update Tea</button>
      <button onClick={()=> onClickingDelete(tea.id) }>Remove Tea</button>
      <hr/>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TeaDetail;