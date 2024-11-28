import React, { useState } from "react";
import classes from "./AddNewQuestion.module.css";

const AddNewQuestion = ({ onClose, onSave , onCancel }) => {
  const [questionType, setQuestionType] = useState(""); // Selected question type
  const [textQuestions, setTextQuestions] = useState([{ question: "", answer: "" }]);
  const [attachments, setAttachments] = useState([]);
  const [mcqs, setMcqs] = useState([{ question: "", options: ["", "", "", ""] }]);

  const handleAddTextQuestion = () => {
    setTextQuestions([...textQuestions, { question: "", answer: "" }]);
  };

  const handleTextQuestionChange = (index, field, value) => {
    const updatedQuestions = [...textQuestions];
    updatedQuestions[index][field] = value;
    setTextQuestions(updatedQuestions);
  };

  const handleAddMcq = () => {
    setMcqs([...mcqs, { question: "", options: ["", "", "", ""] }]);
  };
 

  const addNewMCQ = () => {
    setMcqs((prevMcqs) => [
      ...prevMcqs,
      { question: "", options: ["", "", "", ""], correctOption: null },
    ]);
  };


 
  const handleMCQChange = (index, field, value) => {
    setMcqs((prevMcqs) => {
      const updatedMcqs = [...prevMcqs];
      if (field === "question") {
        updatedMcqs[index].question = value;
      } else if (field === "correctOption") {
        updatedMcqs[index].correctOption = value;
      } else {
        const [optionIndex] = field.split("_");
        updatedMcqs[index].options[optionIndex] = value;
      }
      return updatedMcqs;
    });
  };

  const handleAttachmentChange = (type, file) => {
    setAttachments([...attachments, { type, file }]);
  };

  return (
    <div className={classes.addNewQuestionContainer}>
      <h2>Add New Question</h2>

      <div className={classes.field}>
        <label>Select Question Type:</label>
        <select value={questionType} onChange={(e) => setQuestionType(e.target.value)}>
          <option value="">-- Select --</option>
          <option value="text">Text Question</option>
          <option value="attachment">Attachment (Pdf , Excel , Word)</option>
          <option value="mcq">MCQ</option>
        </select>
      </div>

      {questionType === "text" && (
        <div>
          {textQuestions.map((q, index) => (
            <div key={index} className={classes.field}>
              <label>Question Name:</label>
              <input
                type="text"
                value={q.question}
                onChange={(e) => handleTextQuestionChange(index, "question", e.target.value)}
              />
              <label>Answer:</label>
              <input
                type="text"
                value={q.answer}
                onChange={(e) => handleTextQuestionChange(index, "answer", e.target.value)}
                className={classes.answerDiv}
              />
            </div>
          ))}
          {/* <button className={classes.addButton} onClick={handleAddTextQuestion}>
            Add More Text Questions
          </button> */}
        </div>
      )}

      {questionType === "attachment" && (
        <div className={classes.field}>
          <label>Select Attachment Type:</label>
          {/* <select onChange={(e) => handleAttachmentChange(e.target.value)}>
            <option value="">-- Select --</option>
            <option value="excel">Excel</option>
            <option value="pdf">PDF</option>
            <option value="word">Word</option>
          </select> */}
          <input
            type="file"
            onChange={(e) =>
              handleAttachmentChange(e.target.previousSibling.value, e.target.files[0])
            }
            className={classes.inputFile}
          />
        </div>
      )}

{questionType === "mcq" && (
        <div>
          <h3>MCQs</h3>
          {mcqs.map((mcq, index) => (
            <div key={index} className={classes.field2}>
              <input
                type="text"
                placeholder="Enter MCQ question"
                value={mcq.question}
                onChange={(e) => handleMCQChange(index, "question", e.target.value)}
              />
              <div>
                {mcq.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <input
                      type="text"
                      placeholder={`Option ${optionIndex + 1}`}
                      value={option}
                      onChange={(e) =>
                        handleMCQChange(
                          index,
                          `${optionIndex}_option`,
                          e.target.value
                        )
                      }
                    />
                  </div>
                ))}
              </div>
              <div>
                <label>Correct Option:</label>
                <select
                  value={mcq.correctOption}
                  onChange={(e) =>
                    handleMCQChange(index, "correctOption", e.target.value)
                  }
                >
                  <option value="">Select Correct Option</option>
                  {mcq.options.map((_, optionIndex) => (
                    <option key={optionIndex} value={optionIndex}>
                      Option {optionIndex + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
          {/* <button onClick={addNewMCQ}>Add New MCQ</button> */}
        </div>
      )}

      <div className={classes.buttons}>
        <button className={classes.addButton} onClick={() => onSave({ textQuestions, attachments, mcqs })}>
          Save
        </button>
        <button className={classes.cancelButton} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddNewQuestion;
