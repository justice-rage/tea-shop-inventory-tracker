import React from "react";
import { v4 } from 'uuid';

function NewTeaForm(props){

    function handleNewTeaFormSubmission(event) {
        event.preventDefault();
        console.log(event.target.names.value);
        console.log(event.target.origin.value);
        console.log(event.target.price.value);
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

export default NewTeaForm;