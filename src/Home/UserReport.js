 
import React, { useEffect, useRef, useState } from 'react';
import classes from './UserReport.module.css';
import user from './pngwing.com.png';

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

  // Hardcoded user data
  const users = [
    { id: 1, name: 'John Doe', profile: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png', topics: ['React Basics', 'State and Props', 'JavaScript Fundamentals'] },
    { id: 2, name: 'Jane Smith', profile: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png', topics: ['Node.js Basics', 'Database Integration', 'API Development'] },
    { id: 3, name: 'Alice Johnson', profile: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png', topics: ['CSS Techniques', 'Performance Optimization', 'Git'] },
  ];

  // State to track selected user
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className={classes.outerDiv}>
      {!selectedUser ? (
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
      ) : (
        <div className={classes.userDetail}>
          <button
            className={classes.backButton}
            onClick={() => setSelectedUser(null)}
          >
            Back to Users
          </button>
          <h2>{selectedUser.name}'s Topics</h2>
          <ul>
            {selectedUser.topics.map((topic, index) => (
              <li key={index} className={classes.topicItem}>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserReport;
