 
import React, { useEffect, useRef, useState } from 'react';
import classes from './UserReport.module.css';
import user from './pngwing.com.png';
import AddQuestionForm from '../Forms/AddQuestionForm';

const UserReport = (props) => {

    const isMounted = useRef(false);


    const [showAddAssignmentForm, setShowAddAssignmentForm] = useState(false);
  
    const addAssignmentHandler = () => {
      setShowAddAssignmentForm(true);
    };
  
  
      useEffect(() => {
          isMounted.current = true;
          props.passMountInfo(true);
          return () => {
              isMounted.current = false;
              props.passMountInfo(false);
          };
      }, [props]);

      const topics = [
        "Introduction to React",
        "Understanding State and Props",
        "JavaScript Fundamentals",
        "Advanced CSS Techniques",
        "Node.js Basics",
        "Database Integration",
        "API Development",
        "Debugging and Error Handling",
        "Frontend Performance Optimization",
        "Version Control with Git",
      ];
      const [currentPage, setCurrentPage] = useState(1);
      const topicsPerPage = 5;
    
      const [selectedTopic, setSelectedTopic] = useState(null);
      const [questions, setQuestions] = useState([]);



      const selectTopicHandler = (topic) => {
        setSelectedTopic(topic);
        setQuestions([
          { id: 1, type: "normal", text: `Topic Name: Describe React`, answer: "A JavaScript library for building UIs" },
          { id: 2, type: "mcq", text: ` Topic Name: What is React?`, options: ["Library", "Framework", "Language"], answer: "Library" },
          { id: 3, type: "attachment", text: `Topic Name:  Upload a React project document`, attachment: { name: "react_project.pdf" } },
        ]);
        
      };


      const indexOfLastTopic = currentPage * topicsPerPage;
      const indexOfFirstTopic = indexOfLastTopic - topicsPerPage;    

  // Hardcoded user data
  const users = [
    { id: 1, name: 'John Doe', profile: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png', topics: ['React Basics', 'State and Props', 'JavaScript Fundamentals'] },
    { id: 2, name: 'Jane Smith', profile: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png', topics: ['Node.js Basics', 'Database Integration', 'API Development'] },
    { id: 3, name: 'Alice Johnson', profile: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png', topics: ['CSS Techniques', 'Performance Optimization', 'Git'] },
  ];

  const currentTopics = topics.slice(indexOfFirstTopic, indexOfLastTopic);


  // State to track selected user
  const [selectedUser, setSelectedUser] = useState(null);


  const [showAddQuestionComponent, setShowAddQuestionComponent] = useState(false);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(topics.length / topicsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const renderQuestion = (question) => {
  
    switch (question.type) {
      case "normal":
        return (
          <div className={classes.dd}>
            <div className={classes.txt}>{question.text}</div>
            {question.answer ? (
              <div className={classes.f2}> 
              {/* <p className={classes.answer}>Correct Answer: {question.answer}</p> */}

              <p className={classes.answer2}>Lesson: {question.answer}</p>
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
            {question.options.map((option, index) => (
              <label key={index} className={classes.option}>
                <input
                  type="radio"
                  disabled
                  checked={question.answer === option}
                />
                {option}
              </label>
            ))}
            {question.answer ? (
            <div className={classes.f2}> 
              {/* <p className={classes.answer}>Correct Answer: {question.answer}</p> */}
              <p className={classes.answer2}>Lesson: {question.answer}</p>
            </div>
            ) : (
              <p className={classes.noAnswer}>No answer Selected</p>
            )}
          </div>
        );
      case "attachment":
        return (
          <div>
            <div className={classes.k}>{question.text} <span>  react_project.pdf </span></div>
            {question.attachment ? (
              
              <div className={classes.f2}> 
              {/* <p className={classes.answer}>Correct Answer: This is answer file for the pdf{question.answer}</p> */}
              <p className={classes.answer2}>Lesson: This is answer file for the pdf{question.answer}</p>
            </div>
//               <p className={classes.answer}>
//                 {/* Attached File: {question.attachment.name} */}
// <p className={classes.answer}>Correct Answer: This is answer file for the pdf {question.answer}</p>

//               <div className={classes.j}>Submitted Answer: {question.answer} This is answer file for the pdf</div>
//               </p>
              
            ) : (
              <p className={classes.noAnswer}>No file attached</p>
            )}
          </div>
        );
      default:
        return <p>Unknown question type</p>;
    }
  };

  return (
    <div className={classes.outerDiv}>
    {!selectedUser && !selectedTopic && (
      <div className={classes.userList}>
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className={classes.userItem}
              onClick={() => setSelectedUser(user)}
            >
              <img src={user.profile} alt={user.name} className={classes.profilePic} />
              <span>{user.name}</span>

              <button className={classes.viewReportBtn}>View Report</button>
            </li>
          ))}
        </ul>
      </div>
    )}

    {selectedUser && !selectedTopic && (
      <div className={classes.userDetail}>
        <button
          className={classes.backButton}
          onClick={() => setSelectedUser(null)}
        >
          Back to Users
        </button>
        <h2>{selectedUser.name}'s Subjects</h2>
        <div className={classes.topicsList}>
          <ul>
            {currentTopics.map((topic, index) => (
              <li
                key={index}
                className={classes.topicItem}
                onClick={() => {
                  selectTopicHandler(topic); // Handle topic selection
                  setSelectedUser(null); // Reset the selected user
                }}
              >
                {topic}
              </li>
            ))}
          </ul>
          <div className={classes.pagination}>
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={classes.paginationButton}
            >
              Previous
            </button>
            <span className={classes.pageInfo}>
              Page {currentPage} of {Math.ceil(topics.length / topicsPerPage)}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(topics.length / topicsPerPage)}
              className={classes.paginationButton}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    )}

    {selectedTopic && !showAddQuestionComponent && (
      <div className={classes.questionsPage}>
          <button
          className={classes.backButton}
          onClick={() => setSelectedTopic(null)}
       
        >
          Back to User
        </button>

        <h2>Topics for {selectedTopic}</h2>
        <ul className={classes.questionsList}>
          {questions.map((question) => (
            <li key={question.id} className={classes.questionItem}>
              {renderQuestion(question)}
            </li>
          ))}
        </ul>
        
      </div>
    )}

    {showAddAssignmentForm && <AddQuestionForm />}
  </div>
  );
};

export default UserReport;
