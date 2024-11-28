import React, { useEffect, useRef, useState } from "react";
import classes from "./Questions.module.css";
import AddTest from "../Forms/AddTest";

const Test = (props) => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    props.passMountInfo(true);
    return () => {
      isMounted.current = false;
      props.passMountInfo(false);
    };
  }, [props]);

  // Hardcoded topics with additional fields
  const [topics, setTopics] = useState([
    {
      name: "Introduction to React",
      description: "Learn the basics of React.js and its component model.",
      subject: "Frontend Development",
    },
    {
      name: "Understanding State and Props",
      description: "Explore the concepts of state and props in React.",
      subject: "Frontend Development",
    },
    {
      name: "JavaScript Fundamentals",
      description: "Review core JavaScript concepts essential for web development.",
      subject: "Programming Basics",
    },
    {
      name: "Advanced CSS Techniques",
      description: "Master advanced CSS for responsive and dynamic designs.",
      subject: "Frontend Design",
    },
    {
      name: "Node.js Basics",
      description: "Introduction to Node.js for backend development.",
      subject: "Backend Development",
    },
  ]);

  const [showAddAssignmentForm, setShowAddAssignmentForm] = useState(false);

  const addAssignmentHandler = () => {
    setShowAddAssignmentForm(true);
  };

  const closeAssignmentHandler = () => {
    setShowAddAssignmentForm(false);
  };

  const addTopicHandler = (newTopic) => {
    setTopics((prevTopics) => [...prevTopics, newTopic]);
    closeAssignmentHandler();
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const topicsPerPage = 5;

  // Pagination logic
  const indexOfLastTopic = currentPage * topicsPerPage;
  const indexOfFirstTopic = indexOfLastTopic - topicsPerPage;
  const currentTopics = topics.slice(indexOfFirstTopic, indexOfLastTopic);

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

  // State for selected topic
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const handleBackToTopics = () => {
    setSelectedTopic(null);
  };

  const lessons = [
    {
      subject: "Mathematics",
      topic: "Algebra",
      inputType: "Multiple Choice",
      questionType: "Attachments (cybersecurity.pdf)",
    },
    {
      subject: "Science",
      topic: "Newton's Laws",
      inputType: "Text Entry",
      questionType: "Text : what is cyber security",
    },
    {
      subject: "History",
      topic: "World War II",
      inputType: "Essay",
      questionType: "Mcq",
    },
    {
      subject: "Geography",
      topic: "Climate Change",
      inputType: "Dropdown",
      questionType: "Attachments  (git.pdf)",
    },
    {
      subject: "English",
      topic: "Shakespeare's Works",
      inputType: "Fill in the Blanks",
      questionType: "Text : what is git",
    },
    {
      subject: "Computer Science",
      topic: "Programming Basics",
      inputType: "Code Entry",
      questionType: "Text",
    },
  ];

  // Filter lessons based on selected topic's name
  const filteredLessons = selectedTopic
    ? lessons.filter(
        (lesson) =>
          lesson.topic.toLowerCase() === selectedTopic.name.toLowerCase()
      )
    : [];

  return (
    <div className={classes.outerDiv}>
      <div className={classes.f}>
        <button className={classes.createButton} onClick={addAssignmentHandler}>
          Create Topics
        </button>
      </div>

      {!selectedTopic && (
        <div className={classes.topicsList}>
          <h2>Topics</h2>
          <ul>
            {currentTopics.map((topic, index) => (
              <li
                key={index}
                className={classes.topicItem}
                onClick={() => handleTopicClick(topic)}
              >
                <div className={classes.w}>
                  <div className={classes.s}>
                    <strong>Name:</strong> {topic.name} <br />
                  </div>

                  <div className={classes.s}>
                    <strong>Subject:</strong> {topic.subject}
                  </div>
                </div>

                <div className={classes.s}>
                  <strong>Description:</strong> {topic.description} <br />
                </div>
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
      )}

      {showAddAssignmentForm && (
        <AddTest onBack={closeAssignmentHandler} onAddTopic={addTopicHandler} />
      )}

      {selectedTopic && (
        <div className={classes.lessonsContainer}>

          <div className={classes.div}>
                    <button
            className={classes.backButton}
            onClick={handleBackToTopics}
          >
            Back to Topics
          </button>
          </div>

          <h3>Lessons for: {selectedTopic.name}</h3>
          {lessons.length > 0 ? (
            <ul>
              
              {lessons.map((lesson, index) => (
                <li key={index} className={classes.lessonItem}>
                   <div className={classes.d}><strong>Associated Subject:</strong> {lesson.subject}</div>
            <div className={classes.d}><strong>Topic:</strong> {lesson.topic},</div>

            <div className={classes.d}>  <strong>Input Type:</strong> {lesson.inputType}</div>

            <div className={classes.d}><strong>Lesson Type:</strong> {lesson.questionType}</div>
                </li>
              ))}
              
            </ul>
          ) : (
            <p>No lessons available for this topic.</p>
          )}

          
 
        </div>

        
      )}

      
    </div>
  );
};

export default Test;
