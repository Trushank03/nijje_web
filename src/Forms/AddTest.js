import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
// import classes from "./AddQuestionForm.module.css";

import classes from "./AddTest.module.css"
const AddTest = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [topicName, setTopicName] = useState("");
  const [topicDescription, setTopicDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      selectedOption,
      topicName,
      topicDescription,
    });
    // Handle form submission logic here
  };

  return (
    <div className={classes.createAssignmentFormDivParent}>
      <form className={classes.createAssignmentForm} onSubmit={handleSubmit}>
        <div className={classes.closeButtonDiv}>
          <button className={classes.closeFormButton} onClick={props.onBack}>
            <AiFillCloseCircle className={classes.closeButtonIcon} />
          </button>
        </div>
        <div className={classes.logoAndTitleContainer}>
          <div className={classes.formTitleDiv}>
            <span className={classes.tubeIconText}>Add Topics</span>
          </div>
        </div>

        <div className={classes.divSix2}>
          <label className={classes.label} htmlFor="dropdown">
            <span className={classes.redStar}>*</span>Select Subject
          </label>
          <select
            id="dropdown"
            className={classes.borderBox2}
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" disabled>
              -- Select an Option --
            </option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
          </select>
        </div>

        <div className={classes.divSix}>
          <label className={classes.label} htmlFor="topicName">
            <span className={classes.redStar}>*</span>Topic Name
          </label>
          <input
            className={classes.borderBox}
            type="text"
            id="topicName"
            name="topicName"
            value={topicName}
            onChange={(e) => setTopicName(e.target.value)}
          />
        </div>

        <div className={classes.divSix}>
          <label className={classes.label} htmlFor="topicDescription">
            <span className={classes.redStar}>*</span>Topic Description
          </label>
          <input
            className={classes.borderBox}
            type="text"
            id="topicDescription"
            name="topicDescription"
            value={topicDescription}
            onChange={(e) => setTopicDescription(e.target.value)}
          />
        </div>

        <div className={classes.submitButtonDiv}>
          <button className={classes.submit_button} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTest;
