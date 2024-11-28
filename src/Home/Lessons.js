import React, { useState, useRef, useEffect } from 'react';
import classes from './Lessons.module.css';
import { AiFillCloseCircle } from 'react-icons/ai';

const Lessons = (props) => {
  const isMounted = useRef(false);

  const [showForm, setShowForm] = useState(false);
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [inputType, setInputType] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [statement, setStatement] = useState(''); // New state for MCQ statement
  const [understood, setUnderstood] = useState(''); // New state for the dropdown

  const [lessons, setLessons] = useState([]);
  const [showAddAssignmentForm, setShowAddAssignmentForm] = useState(false);

  const addAssignmentHandler = () => {
    setShowAddAssignmentForm(true);
  };

  const closeAssignmentHandler = () => {
    setShowAddAssignmentForm(false);
  };

  useEffect(() => {
    isMounted.current = true;
    props.passMountInfo(true);
    return () => {
      isMounted.current = false;
      props.passMountInfo(false);
    };
  }, [props]);

  const handleCreateLessonClick = () => {
    setShowForm(true);
  };

  const handleInputTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handleQuestionTypeChange = (e) => {
    setQuestionType(e.target.value);
  };

  const handleStatementChange = (e) => {
    setStatement(e.target.value);
  };

  const handleUnderstoodChange = (e) => {
    setUnderstood(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lessonData = {
      subject,
      topic,
      inputType,
      questionType,
      correctAnswer,
      statement,
      understood,
    };

    setLessons((prevLessons) => [...prevLessons, lessonData]);

    // Reset form fields
    setSubject('');
    setTopic('');
    setInputType('');
    setQuestionType('');
    setCorrectAnswer('');
    setStatement(''); // Reset statement
    setUnderstood(''); // Reset understood
    setShowForm(false);
    setShowAddAssignmentForm(false);
  };

  const [showPopup, setShowPopup] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleViewLesson = (lesson) => {
    setSelectedLesson(lesson);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedLesson(null);
  };

  const [options, setOptions] = useState(['', '', '', '']); // State for four MCQ options


  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  return (
    <div className={classes.lessonsContainer}>
      <button className={classes.createButton} onClick={addAssignmentHandler}>
        Create Lesson
      </button>

      {showAddAssignmentForm && (
        <div className={classes.ioo}>
          <form className={classes.createAssignmentForm} onSubmit={handleSubmit}>
            <div className={classes.backContainer}>
              <button className={classes.btnBack} onClick={closeAssignmentHandler}>
                <AiFillCloseCircle className={classes.closeButtonIcon} />
              </button>
            </div>

            <h2 className={classes.formTitle}>Create Lesson</h2>

            {/* Subject Field */}
            <div className={classes.y}>
              <div className={classes.formGroup}>
                <label className={classes.formLabel}>Subject:</label>
                <select
                  className={classes.formSelect}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="math">Math</option>
                  <option value="science">Science</option>
                  <option value="history">History</option>
                </select>
              </div>

              {/* Topic Field */}
              <div className={classes.formGroup}>
                <label className={classes.formLabel}>Topic:</label>
                <select
                  className={classes.formSelect}
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  required
                >
                  <option value="">Select Topic</option>
                  <option value="algebra">Algebra</option>
                  <option value="biology">Biology</option>
                  <option value="world-war">World War</option>
                </select>
              </div>

              {/* Input Type Field */}
              <div className={classes.formGroup}>
                <label className={classes.formLabel}>Expected Input Type:</label>
                <select
                  className={classes.formSelect}
                  value={inputType}
                  onChange={handleInputTypeChange}
                  required
                >
                  <option value="">Select Input Type</option>
                  <option value="audio">Audio</option>
                  <option value="text">Text</option>
                </select>
              </div>

              {/* Question Type Field */}
              <div className={classes.formGroup}>
                <label className={classes.formLabel}>Lesson Type:</label>
                <select
                  className={classes.formSelect}
                  value={questionType}
                  onChange={handleQuestionTypeChange}
                  required
                >
                  <option value="">Select Lesson Type</option>
                  <option value="text">Text Input</option>
                  <option value="attachments">Attachments (pdf , excel , word , image)</option>
                  <option value="mcq">MCQ</option>
                </select>

                {questionType === 'mcq' && (
              <>
                <div className={classes.formGroup2}>
                  <label className={classes.formLabel2}>Statement:</label>
                  <input
                    className={classes.textInput2}
                    type="text"
                    placeholder="Enter MCQ statement"
                    value={statement}
                    onChange={handleStatementChange}
                    required
                  />
                </div>

                {options.map((option, index) => (
                  <div className={classes.formGroup2} key={index}>
                    <label className={classes.formLabel2}>Option {index + 1}:</label>
                    <input
                      className={classes.textInput2}
                      type="text"
                      placeholder={`Enter Option ${index + 1}`}
                      value={option}
                      onChange={(e) => handleOptionChange(index, e.target.value)}
                      required
                    />
                  </div>
                ))}

                <div className={classes.formGroup2}>
                  <label className={classes.formLabel2}>Correct Answer:</label>
                  <select
                    className={classes.formSelect}
                    value={correctAnswer}
                    onChange={(e) => setCorrectAnswer(e.target.value)}
                    required
                  >
                    <option value="">Select Correct Answer</option>
                    {options.map((option, index) => (
                      <option key={index} value={option}>
                        {`Option ${index + 1}`}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}

                {questionType === 'text' && (
                  <input className={classes.textInput} type="text" placeholder="Enter text" />
                )}
                {questionType === 'attachments' && (
                  <input className={classes.fileInput} type="file" />
                )}
              </div>
            </div>

            <div className={classes.fif2}>
              
              <label className={classes.mcqLabel}>Clarifyinng Text 1:</label>
              <input className={classes.textInput2} type="text" placeholder="Enter text" />
              
              </div>

          <div className={classes.fif2}>
              
              <label className={classes.mcqLabel}>Clarifyinng Text 2:</label>
              <input className={classes.textInput2} type="text" placeholder="Enter text" />
              
              </div>


          <div className={classes.fif2}>
              
              <label className={classes.mcqLabel}>Clarifyinng Text 3:</label>
              <input className={classes.textInput2} type="text" placeholder="Enter text" />
              
              </div>

          

            {/* Submit Button */}
            <button className={classes.submitButton} type="submit">
              Submit
            </button>
          </form>
        </div>
      )}

      <div className={classes.lessonContainer}>
        <div className={classes.lessonList}>
          <h2>Lesson List</h2>
          {lessons.length === 0 ? (
            <p>No lessons created yet.</p>
          ) : (
            <ul>
              {lessons.map((lesson, index) => (
                <li key={index} className={classes.lessonItem}>
                  <div className={classes.e}>
                    <div className={classes.d}><strong>Associated Subject:</strong> {lesson.subject}</div>
                    <div className={classes.d}><strong>Topic:</strong> {lesson.topic}</div>
                    <div className={classes.d}><strong>Input Type:</strong> {lesson.inputType}</div>
                    <div className={classes.d}><strong>Lesson Type:</strong> {lesson.questionType}</div>

                    {lesson.questionType === 'mcq' && (
                      <div className={classes.d}><strong>Lesson Type: </strong>MCQ</div>
                    )}
                    {lesson.questionType === 'text' && (
                      <div className={classes.d}><strong>Lesson Type: </strong>Text Input</div>
                    )}
                    {lesson.questionType === 'attachments' && (
                      <div className={classes.d}><strong>Lesson Type: </strong>Attachments</div>
                    )}
                  </div>

                  <div className={classes.e3}>
                    <button
                      className={classes.viewButton}
                      onClick={() => handleViewLesson(lesson)}
                    >
                      View Lesson
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {showPopup && selectedLesson && (
          <div className={classes.popupContainer}>
            <div className={classes.popupContent}>
              <button className={classes.closePopupButton3} onClick={handleClosePopup}>
                <AiFillCloseCircle />
              </button>
              <h3>Lesson Details</h3>
              <div className={classes.f}>  <p><strong>Subject:</strong> {selectedLesson.subject}</p> </div>
              <div className={classes.f}>  <p><strong>Topic:</strong> {selectedLesson.topic}</p> </div>
              <div className={classes.f}>  <p><strong>Input Type:</strong> {selectedLesson.inputType}</p> </div>
              <div className={classes.f}>  <p><strong>Lesson Type:</strong> {selectedLesson.questionType}</p> </div>
              {selectedLesson.questionType === 'mcq' && (
                <>
                 <div className={classes.f}>   <p><strong>Statement:</strong> {selectedLesson.statement}</p> </div>
                 <div className={classes.f}>   <p><strong>Response 1:</strong> Understood</p>   </div>
                 <div className={classes.f}>   <p><strong>Response 2:</strong> No</p>  </div>
                 <div className={classes.f}>   <p><strong>Response 3:</strong> yes</p>  </div>
                   
                  
                </>
              )}

{selectedLesson.questionType === 'text' && (
                <>
                  <p><strong>Text:</strong> {selectedLesson.statement}</p>
                 
                   
                  
                </>
              )}


{selectedLesson.questionType === 'attachments' && (
                <>
                  <p><strong>attachments:</strong>  React.pdf</p>
                 
                   
                  
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lessons;
