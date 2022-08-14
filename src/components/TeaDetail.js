import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  const { tea, onClickingDelete, onClickingEdit, onClickingPurchase } = props;

  return (
    <React.Fragment>
      <h1>Tea Detail</h1>
      <h3>Name: {tea.names}</h3>
      <h3>Origin: {tea.origin}</h3>
      <p>Price: ${tea.price}.00 per oz</p>
      <p>
        Available Stock: {""}
        {tea.quantity > 0 ? tea.quantity + " oz" : "Out of Stock"}
      </p>
      <button onClick={ onClickingEdit }>Update Tea</button>
      <button onClick={()=> onClickingDelete(tea.id) }>Remove Tea</button>
      <button onClick={() => onClickingPurchase(tea.id)}>Purchase</button>
      <hr/>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingPurchase: PropTypes.func,
};

export default TeaDetail;