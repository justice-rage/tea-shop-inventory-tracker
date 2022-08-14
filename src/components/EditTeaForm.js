import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTeaForm(props){
    const { tea } = props;
  
    function handleEditTeaFormSubmission(event) {
      event.preventDefault();
      props.onEditTea({names: event.target.names.value, origin: event.target.origin.value, price: event.target.price.value, id: tea.id});
    }
  
    return (
      <React.Fragment>
        <ReusableForm 
          formSubmissionHandler={handleEditTeaFormSubmission}
          buttonText="Update Tea" />
      </React.Fragment>
    );
}

export default EditTeaForm;