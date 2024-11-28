import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
// import classes from "./AddQuestionForm.module.css";
import classes from "./NewQuestion.module.css";

const NewQuestion = (props) => {
  const [questionPreface, setQuestionPreface] = useState("");
  const [questionType, setQuestionType] = useState(""); // New state for Question Type
  const [statement, setStatement] = useState(""); // State for MCQ statement
  const [textAnswer, setTextAnswer] = useState(""); // State for text answer type
  const [fileAnswer, setFileAnswer] = useState(null); // State for file answer type
  const [options, setOptions] = useState({
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  }); // State for MCQ options
  const [correctOption, setCorrectOption] = useState("");
  const [displayOption, setDisplayOption] = useState(""); // State for when question should be displayed

  const handleOptionChange = (e) => {
    const { name, value } = e.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      questionPreface,
      questionType,
      statement,
      textAnswer,
      fileAnswer,
      options,
      correctOption,
      displayOption,
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
            <span className={classes.tubeIconText}>Add Question</span>
          </div>
        </div>

        {/* Question Preface */}
        <div className={classes.divSix}>
          <label className={classes.label} htmlFor="questionPreface">
            <span className={classes.redStar}>*</span>Question Preface
          </label>
          <input
            className={classes.borderBox}
            type="text"
            id="questionPreface"
            name="questionPreface"
            value={questionPreface}
            onChange={(e) => setQuestionPreface(e.target.value)}
          />
        </div>

        {/* Question Type */}
        <div className={classes.divSix}>
          <label className={classes.label} htmlFor="questionType">
            <span className={classes.redStar}>*</span>Question Type
          </label>
          <select
            id="questionType"
            name="questionType"
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
            className={classes.borderBox}
          >
            <option value="" disabled>
              -- Select Question Type --
            </option>
            <option value="text">Text</option>
            <option value="attachments">Attachments</option>
            <option value="mcq">MCQ</option>
          </select>
        </div>

        {/* Conditional Input Fields based on Question Type */}
        {questionType === "text" && (
          <div className={classes.divSix}>
            <label className={classes.label} htmlFor="textAnswer">
              <span className={classes.redStar}>*</span>Answer (Text)
            </label>
            <input
              className={classes.borderBox}
              type="text"
              id="textAnswer"
              name="textAnswer"
              value={textAnswer}
              onChange={(e) => setTextAnswer(e.target.value)}
            />
          </div>
        )}

        {questionType === "attachments" && (
          <div className={classes.divSix}>
            <label className={classes.label} htmlFor="fileAnswer">
              <span className={classes.redStar}>*</span>Upload Answer File
            </label>
            <input
              className={classes.borderBox}
              type="file"
              id="fileAnswer"
              name="fileAnswer"
              onChange={(e) => setFileAnswer(e.target.files[0])}
            />
          </div>
        )}

        {questionType === "mcq" && (
          <>
            {/* MCQ Question Statement */}
            <div className={classes.divSix}>
              <label className={classes.label} htmlFor="statement">
                <span className={classes.redStar}>*</span>Question Statement
              </label>
              <input
                className={classes.borderBox}
                type="text"
                id="statement"
                name="statement"
                value={statement}
                onChange={(e) => setStatement(e.target.value)}
                placeholder="Enter your question here"
              />
            </div>

            {/* MCQ Options */}
            <div className={classes.divSix}>
              <label className={classes.label}>Options</label>
              <div className={classes.optionsContainer}>
                {["option1", "option2", "option3", "option4"].map((option, index) => (
                  <div key={index} className={classes.option}>
                    <input
                      type="text"
                      name={option}
                      value={options[option]}
                      onChange={handleOptionChange}
                      placeholder={`Option ${index + 1}`}
                      className={classes.borderBox3}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Correct Option */}
            <div className={classes.divSix}>
              <label className={classes.label} htmlFor="correctOption">
                <span className={classes.redStar}>*</span>Correct Option
              </label>
              <select
                id="correctOption"
                name="correctOption"
                value={correctOption}
                onChange={(e) => setCorrectOption(e.target.value)}
                className={classes.borderBox}
              >
                <option value="" disabled>
                  -- Select Correct Option --
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>
          </>
        )}

        {/* When should this question be displayed? */}
        <div className={classes.divSix}>
          <label className={classes.label} htmlFor="displayOption">
            <span className={classes.redStar}>*</span>When should this question be displayed?
          </label>
          <select
            id="displayOption"
            name="displayOption"
            value={displayOption}
            onChange={(e) => setDisplayOption(e.target.value)}
            className={classes.borderBox}
          >
            <option value="" disabled>
              -- Select an Option --
            </option>
            <option value="afterTopicEnds">After this topic ends</option>
            <option value="afterSubjectEnds">After this subject ends</option>
          </select>
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

export default NewQuestion;
