import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewTeaForm(props){

    function handleNewTeaFormSubmission(event) {
        event.preventDefault();
        props.onNewTeaCreation({
          names: event.target.names.value, 
          origin: event.target.origin.value, 
          price: event.target.price.value, 
          id: v4()
        });
      }

    return (
        <React.Fragment>
          <form onSubmit={handleNewTeaFormSubmission}>
            <input
              type='text'
              name='names'
              placeholder='Tea Names' />
            <input
              type='text'
              name='origin'
              placeholder='Origin' />
            <textarea
              name='price'
              placeholder='Price' />
            <button type='submit'>Add to inventory</button>
          </form>
        </React.Fragment>
      );
}

NewTeaForm.propTypes = {
    onNewTeaCreation: PropTypes.func
};

export default NewTeaForm;