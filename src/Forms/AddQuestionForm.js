import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai"; 
import classes from "./AddQuestionForm.module.css";

const AddQuestionForm = (props) => {
  
  return (
    <div className={classes.createAssignmentFormDivParent}>
      <form className={classes.createAssignmentForm}  >
        
        <div className={classes.backContainer}>
          
      <button   className={classes.btnBack} onClick={props.onBack}>
            <AiFillCloseCircle className={classes.closeButtonIcon} />
          </button>

          </div>


        <div className={classes.logoAndTitleContainer}>
          <div className={classes.formTitleDiv}>
            <span className={classes.tubeIconText}>Add Subjects</span>
          </div>
        </div>
       

        <form className={classes.form} >

 

<div className={classes.divSix}>
  <label className={classes.label} htmlFor="Place Name"><span className={classes.redStar}>*</span>Subject Name </label>
  <input className={classes.borderBox} type="text" id="placename" name="placename"  />
</div>
<div className={classes.divSix}>
  <label className={classes.label} htmlFor="Post Office"><span className={classes.redStar}>*</span>Subject Description </label>
  <input className={classes.borderBox} type="text" id="postoffice" name="postoffice"  />
</div>

<div className={classes.submitButtonDiv}>
          
          <button className={classes.submit_button} type="submit">
            Submit
          </button>
       
      </div>
 
 

 


 

</form>

 

      
      </form>
    </div>
  );
};

export default AddQuestionForm;
