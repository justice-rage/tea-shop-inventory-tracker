import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewTeaForm(props){

    function handleNewTeaFormSubmission(event) {
        event.preventDefault();
        props.onNewTeaCreation({
          names: event.target.names.value, 
          origin: event.target.origin.value, 
          price: event.target.price.value, 
          quantity: parseInt(130),
          id: v4()
        });
      }

      return (
        <React.Fragment>
          <ReusableForm 
            formSubmissionHandler={handleNewTeaFormSubmission}
            buttonText="Add Tea Crate to Inventory" />
        </React.Fragment>
      );
    }

NewTeaForm.propTypes = {
    onNewTeaCreation: PropTypes.func
};

export default NewTeaForm;