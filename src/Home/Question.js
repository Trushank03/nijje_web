import React, { useEffect, useRef, useState } from 'react';
import classes from './Questions.module.css';
import AddQuestionForm from '../Forms/AddQuestionForm';

const Questions = (props) => {
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

    // Hardcoded topics
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

    return (
        <div className={classes.outerDiv}>
            <div className={classes.f}> 
            <button className={classes.createButton} onClick={addAssignmentHandler}>Create Topics Page</button>
            </div>


            <div className={classes.topicsList}>
                <h2> Topics</h2>
                <ul>
                    {currentTopics.map((topic, index) => (
                        <li key={index} className={classes.topicItem}>
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

            {showAddAssignmentForm && (
              <AddQuestionForm
              
              />
            )}
            


        </div>
    );
};

export default Questions;
