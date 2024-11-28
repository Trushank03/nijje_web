import React, { useEffect, useRef } from 'react';
import classes from './Dashboard.module.css';

const Dashboard = (props) => {
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
        props.passMountInfo(true);
        return () => {
            isMounted.current = false;
            props.passMountInfo(false);
        };
    }, [props]);
 
    const blockData = [
        { title: "Total Topics ", value: 120 },
        { title: "Total Questions ", value: 450 },
        { title: "Total Users", value: 980 },
        { title: "Questions Attempted", value: 15 },
        // { title: "Total Assignments Submitted", value: 360 },
        // { title: "Total Grades Assigned", value: 800 },
        // { title: "Pending Submissions", value: 25 },
        // { title: "Upcoming Tests", value: 4 },
    ];

    return (
        <div className={classes.outerDiv}>

            <div className={classes.dashboardHeading}>Dashboard</div>

            <div className={classes.blockContainer}>
                {blockData.map((block, index) => (
                    <div key={index} className={classes.block}>
                        <h3 className={classes.blockTitle}>{block.title}</h3>
                        <p className={classes.blockValue}>{block.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
