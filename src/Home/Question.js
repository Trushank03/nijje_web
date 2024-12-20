import React, { useEffect, useRef, useState } from "react";
import classes from "./Questions.module.css";
import AddQuestionForm from "../Forms/AddQuestionForm";
import AddNewQuestion from "../Forms/AddNewQuestion";
import AddTest from "../Forms/AddTest";

const Questions = (props) => {
  const isMounted = useRef(false);

  const [showAddAssignmentForm, setShowAddAssignmentForm] = useState(false);
  const [showAddQuestionComponent, setShowAddQuestionComponent] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [questions, setQuestions] = useState([]);


  const [showTopicForm, setShowTopicForm] = useState(false);

  const addTopichandler = () => {
    setShowTopicForm(true);
  };

   
  const closeTopicHandler = () => {
    setShowTopicForm(false);
  };

  

  const addAssignmentHandler = () => {
    setShowAddAssignmentForm(true);
  };

  const CloseAssignmentHandler = () => {
    setShowAddAssignmentForm(false);
  };

  const selectTopicHandler = (topic) => {
    setSelectedTopic(topic);
    setQuestions([
      { id: 1, type: "normal", text: `Topic Name: Computer Science`, answer: "A JavaScript library for building UIs" },
      { id: 2, type: "mcq", text: `Topic Name:  Cyber Security`, answer: "Nmap is used to trace the network" },
      { id: 3, type: "attachment", text: `Topic Name:  Git`,  answer:"Git is software" },
    ]);
    
  };

  const addQuestionHandler = (newQuestion) => {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
    setShowAddAssignmentForm(false);
    setShowAddQuestionComponent(false);
  };

  const handleAnswerChange = (questionId, answer) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId ? { ...q, answer } : q
      )
    );
  };

  const handleFileUpload = (questionId, file) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId ? { ...q, attachment: file } : q
      )
    );
  };

  useEffect(() => {
    isMounted.current = true;
    props.passMountInfo(true);
    return () => {
      isMounted.current = false;
      props.passMountInfo(false);
    };
  }, [props]);

  const renderQuestion = (question) => {
  
    switch (question.type) {
      case "normal":
        return (
          <div className={classes.dd}>
            <div className={classes.txt}>{question.text}</div>
            <div className={classes.k}>Topic Description: {question.answer} <span>   </span></div>

            {question.answer ? (
              <div className={classes.f2}> 
              {/* <p className={classes.answer}>Correct Answer: {question.answer}</p> */}

              {/* <p className={classes.answer2}>Lesson: {question.answer}</p> */}
              </div>
            ) : (
              <p className={classes.noAnswer}>No answer provided</p>
            )}
          </div>
        );
      case "mcq":
        return (
          <div className={classes.dd}> 
            <div className={classes.txt}>{question.text}</div>
            <div className={classes.k}>Topic Description: {question.answer} <span>   </span></div>

            {/* {question.options.map((option, index) => (
              <label key={index} className={classes.option}>
                <input
                  type="radio"
                  disabled
                  checked={question.answer === option}
                />
                {option}
              </label>
            ))} */}
            {question.answer ? (
            <div className={classes.f2}> 
              {/* <p className={classes.answer}>Correct Answer: {question.answer}</p> */}
              {/* <p className={classes.answer2}>Lesson: {question.answer}</p> */}
            </div>
            ) : (
              <p className={classes.noAnswer}>No answer Selected</p>
            )}
          </div>
        );
      case "attachment":
        return (
          <div>
            <div className={classes.k}>{question.text} <span>   </span></div>
            <div className={classes.k}>Topic Description: {question.answer} <span>   </span></div>

         
   

  
<div className={classes.f3}> 
{/* <p className={classes.answer}>Correct Answer: This is answer file for the pdf {question.answer}</p> */}
{/* <p className={classes.answer2}>Lesson: This is answer file for the pdf {question.answer}</p> */}
</div>
      
          </div>
        );
      default:
        return <p>Unknown question type</p>;
    }
  };
  

  return (
    <div className={classes.outerDiv}>
      {!selectedTopic && (
        <>
          <div className={classes.f}>
            <button
              className={classes.createButton}
              onClick={addAssignmentHandler}
            >
              Create Subjects
            </button>
          </div>

          <div className={classes.topicsList}>
  <h2>Subject List</h2>
  <ul>
    {[
      "Subject Name: Topic 1, Subject Description: description of the subject",
      "Subject Name: Topic 2, Subject Description: description of the subject",
      "Subject Name: Topic 3, Subject Description: description of the subject",
    ].map((topic, index) => {
      const [subjectName, subjectDescription] = topic.split(","); // Split the string
      return (
        <li
          key={index}
          className={classes.topicItem}
          onClick={() => selectTopicHandler(topic)}
        >
          <div className={classes.subjectName}>{subjectName.trim()}</div>
          <div className={classes.subjectDescription}>{subjectDescription.trim()}</div>
        </li>
      );
    })}
  </ul>
</div>

        </>
      )}

      {selectedTopic && !showAddQuestionComponent && (
        <div className={classes.questionsPage}>

          <div className={classes.add}>
          <button
            className={classes.addQuestionButton}
            onClick={() => {
              setSelectedTopic(null); // Reset selectedTopic to null
              setShowAddQuestionComponent(false); // Ensure AddQuestionComponent is hidden
            }}
          >
            Go Back
          </button>

          <button className={classes.createButton2} onClick={addTopichandler}>
          Create Topics
        </button>
        
          </div>


          <h2> {selectedTopic}</h2>
          <ul className={classes.questionsList}>
            {questions.map((question) => (
              <li key={question.id} className={classes.questionItem}>
                {renderQuestion(question)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {showAddQuestionComponent && (
        <AddNewQuestion
          onAddQuestion={addQuestionHandler}
          onCancel={() => setShowAddQuestionComponent(false)}
        />
      )}

      {showAddAssignmentForm && (
        <AddQuestionForm onBack={CloseAssignmentHandler} />

      )}

      {showTopicForm && (
          <AddTest onBack={closeTopicHandler}   />
      )}

      
    </div>
  );
};

export default Questions;
