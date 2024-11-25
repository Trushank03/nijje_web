import React, { useState, useEffect, useRef } from "react";
import classes from "./Sidebar.module.css";
import { FaUsers } from "react-icons/fa";
// import { BsPlusCircle } from "react-icons/bs";
// import { BsPlusLg } from "react-icons/bs";
// import LeftSideMenu from "./LeftSideMenu";
// import RightSideDetails from "./RightSideDetails";
// import insIcon from "./instituteIICON.jpeg";
// import Attednace from "./Attendance";
// import CourseDetails from "./Course_details";

// import Batches from "./Batches";
// import Single_course_View from "./Single_course_View";
// import People from "./People";
// import Assets from "./Assets";
// import TimeTable from "./TimeTable";
// import LeaveApplication from "./LeaveApplication";
// import CreateInstituteForm from "./Forms/CreateInstituteForm";
// import InstituteHeader from "./InstituteHeader";
// import InstituteProfile from "./InstituteProfile";
// import { getoneinstitutedetail } from '../../CommonApps/AllAPICalls';
// import Sms from './Sms';
// import { FaSms } from "react-icons/fa";

// import { FaPeopleGroup } from "react-icons/fa6";

import {
  BsPeopleFill,
  BsReceipt,
  BsWallet2,
  BsMortarboardFill,
  BsTable,
  BsWalletFill,
  BsJournalBookmarkFill,
  BsBank,
  BsCalendar4Event,
  BsClipboardCheck,
  BsGrid3X3Gap,
  BsEnvelope
} from "react-icons/bs";
import Header from "../Header/Header";
import Dashboard from "../Home/Dashboard";
import Questions from "../Home/Question";
import Test from "../Home/Test";
import UserReport from "../Home/UserReport";


// import Finance from "./Finance";
// import Notices from "./Notices";




const InstituteContentDiv = (props) => {





  const [instituteProfileMounted, setInstituteProfileMounted] = useState(true);
  const [institutePeopleMounted, setInstitutePeopleMounted] = useState(false);

  const [instituteBatchesMounted, setInstituteBatchesMounted] = useState(false);


  const [instituteAttendanceMounted, setInstituteAttendanceMounted] = useState(false);
  const [instituteFinanceMounted, setInstituteFinanceMounted] = useState(false);
  const [instituteCoursesMounted, setInstituteCoursesMounted] = useState(false);
  const [instituteLeaveAppMounted, setInstituteLeaveAppMounted] = useState(false);
  const [instituteAssetsMounted, setInstituteAssetsMounted] = useState(false);

  const [instituteNoticesMounted, setinstituteNoticesMounted] = useState(false);
  const [instituteBulkMessagesMounted, setInstituteBulkMessagesMounted] = useState(false);

  const [instituteTimeTableMounted, setInstituteTimeTableMounted] = useState(false);

  let mountedButtonStyle = { color: "var(--themeColor)", backgroundColor: "#fff" }
  let unmountedButtonStyle = { color: "black", backgroundColor: "transparent" }

  //console.log("instituteProfileMounted: ", instituteProfileMounted);


  const [showPeopleDetails, setPeople] = useState(false);

  const [showBatchDetails, setBatches] = useState(false);


  const [showAttendanceDetails, setAttendance] = useState(false);
  const [showCourseDetails, setCourse] = useState(false);
  const [showFeesDetails, setFees] = useState(false);
  const [showAssetsDetails, setAssets] = useState(false);

  const [showTimeTableDetails, setTimeTable] = useState(false);
  const [showLeaveApplicationDetails, setLeaveApplication] = useState(false);
  const [showNotices, setshowNotices] = useState(false);

  const [showInstituteDetails, setInstitute] = useState(true);

  const [oneInstituteDetail, getOneInstituteDetail] = useState(null);

  const [rerender, setRerender] = useState(false);
  const [showBulkMessages, setBulkMessages] = useState(false);


 
  // console.log("oneInstituteDetail: ", oneInstituteDetail);


  const rerenderHandler = () => {

    setRerender(rerender => !rerender);

  }
  const handleButtonClick = (action) => {
    action();
  };




  const showInstituttteDetailshandler = () => handleButtonClick(() => {
    setAttendance(false);
    setCourse(false);
    setFees(false);
    setAssets(false);
    setTimeTable(false);
    setLeaveApplication(false);
    setPeople(false);
    setInstitute(true);
    setBatches(false);
    setshowNotices(false);
    setBulkMessages(false);
  });

  const showPeopleDetailsHandler = () => handleButtonClick(() => {
    setAttendance(false);
    setCourse(false);
    setFees(false);
    setAssets(false);
    setTimeTable(false);
    setLeaveApplication(false);
    setPeople(true);
    setInstitute(false);
    setshowNotices(false);
    setBatches(false);
    setBulkMessages(false);
  });

  const showAttendanceDetailsHandler = () => handleButtonClick(() => {
    setAttendance(true);
    setCourse(false);
    setFees(false);
    setAssets(false);
    setPeople(false);
    setTimeTable(false);
    setLeaveApplication(false);
    setInstitute(false);
    setBatches(false);
    setshowNotices(false);
    setBulkMessages(false);
  });

  const showCourseDetailsHandler = () => handleButtonClick(() => {
    setAttendance(false);
    setCourse(true);
    setFees(false);
    setAssets(false);
    setPeople(false);
    setTimeTable(false);
    setLeaveApplication(false);
    setInstitute(false);
    setBatches(false);
    setshowNotices(false);
    setBulkMessages(false);
  });

  const showFeesDetailsHandler = () => handleButtonClick(() => {
    setAttendance(false);
    setCourse(false);
    setFees(true);
    setPeople(false);
    setAssets(false);
    setTimeTable(false);
    setLeaveApplication(false);
    setInstitute(false);
    setBatches(false);
    setshowNotices(false);
    setBulkMessages(false);
  });

  const showAssetsDetailsHandler = () => handleButtonClick(() => {
    setAttendance(false);
    setCourse(false);
    setFees(false);
    setPeople(false);
    setAssets(true);
    setTimeTable(false);
    setLeaveApplication(false);
    setInstitute(false);
    setBatches(false);
    setshowNotices(false);
    setBulkMessages(false);
  });

  const showTimeTableDetailsHandler = () => handleButtonClick(() => {
    setAttendance(false);
    setCourse(false);
    setFees(false);
    setPeople(false);
    setAssets(false);
    setTimeTable(true);
    setLeaveApplication(false);
    setInstitute(false);
    setBatches(false);
    setshowNotices(false);
    setBulkMessages(false);
  });

  const showLeaveApplicationDetailsHandler = () => handleButtonClick(() => {
    setAttendance(false);
    setCourse(false);
    setFees(false);
    setPeople(false);
    setAssets(false);
    setTimeTable(false);
    setLeaveApplication(true);
    setInstitute(false);
    setBatches(false);
    setshowNotices(false);
    setBulkMessages(false);
  });


  const showBatchesDetailsHandler = () => handleButtonClick(() => {

    setBatches(true);
    setAttendance(false);
    setCourse(false);
    setFees(false);
    setPeople(false);
    setAssets(false);
    setTimeTable(false);
    setLeaveApplication(false);
    setInstitute(false);
    setshowNotices(false);
    setBulkMessages(false);

  });

  const showNoticesDetailsHandler = () => handleButtonClick(() => {
    setAttendance(false);
    setCourse(false);
    setFees(false);
    setPeople(false);
    setAssets(false);
    setTimeTable(false);
    setshowNotices(true);
    setLeaveApplication(false);
    setInstitute(false);
    setBatches(false);
    setBulkMessages(false);
  });

  const showBulkMessagesHandler = () => handleButtonClick(() => {
    setAttendance(false);
    setCourse(false);
    setFees(false);
    setPeople(false);
    setAssets(false);
    setTimeTable(false);
    setshowNotices(false);
    setLeaveApplication(false);
    setInstitute(false);
    setBatches(false);
    setBulkMessages(true);

  });
  const [showBiometricToggle, setShowBiometricToggle] = useState(true);  // Control toggle visibility


  const updateIsEditable = (isEditable) => {
    getOneInstituteDetail((prevInstitute) => ({
      ...prevInstitute,
      is_editable: isEditable
    }));
  };
  useEffect(() => {
    setShowBiometricToggle(oneInstituteDetail?.is_editable);
  }, [oneInstituteDetail?.is_editable]);




  const closeCreateAssetForm = () => {


    //  props.rerender();

  }

 




  return (
    <div className={classes.contactTitleDiv}>
      {/*
      <div className={classes.contactTitle}>
          Institute: manage your institute
      </div> 
      */}

      <Header  />



      <div className={classes.mainContainer}>
        <div className={classes.mainContainer2}>
          <div className={classes.parentClass2}>


            <div className={classes.menuTitle}>Menu</div>

            <button
              className={classes.peopleBtn}
              type="button"
              onClick={showInstituttteDetailshandler}
              style={instituteProfileMounted ? mountedButtonStyle : unmountedButtonStyle}
            >
              <div className={classes.peopleIcon}>
                <BsBank />
              </div>
              <div className={classes.peopleSection}> Dashboard</div>
            </button>

            <button
              className={classes.peopleBtn}
              onClick={showPeopleDetailsHandler}
              type="button"
              style={institutePeopleMounted ? mountedButtonStyle : unmountedButtonStyle}
            >
              <div className={classes.peopleIcon}>
           <BsReceipt />
              </div>
              <div className={classes.peopleSection}>Manage Questions</div>
            </button>


            {/* <button
              className={classes.peopleBtn}
              onClick={showBatchesDetailsHandler}
              type="button"
              style={instituteBatchesMounted ? mountedButtonStyle : unmountedButtonStyle}
            >
              <div className={classes.peopleIcon}>


                <FaUsers />

              </div>
              <div className={classes.peopleSection}>Tests</div>
            </button> */}

            {/* <button
              className={classes.courseBtn}
              onClick={showCourseDetailsHandler}
              type="button"
              style={instituteCoursesMounted ? mountedButtonStyle : unmountedButtonStyle}
            >
              <div className={classes.coursesIcon}>
                <BsMortarboardFill />
              </div>
              <div className={classes.coursesSection}>Courses</div>
            </button> */}


            {/*
            <button
              className={classes.AttendanceBtn}
              onClick={showAttendanceDetailsHandler}
              type="button"
              style={instituteAttendanceMounted ? mountedButtonStyle: unmountedButtonStyle}
            >
              <div className={classes.AttendanceIcon}>
                <BsReceipt />
              </div>
              <div className={classes.AttendanceSection}>Rules an Regulations</div>
            </button>
            */}

            <button
              className={classes.AttendanceBtn}
              onClick={showAttendanceDetailsHandler}
              type="button"
              style={instituteAttendanceMounted ? mountedButtonStyle : unmountedButtonStyle}
            >
              <div className={classes.AttendanceIcon}>
              <BsPeopleFill /> 
              </div>
              <div className={classes.AttendanceSection}>User Reports</div>
            </button>

            {/* <button
              className={classes.feesBtn}
              onClick={showFeesDetailsHandler}
              type="button"
              style={instituteFinanceMounted ? mountedButtonStyle : unmountedButtonStyle}
            >
              <div className={classes.feesIcon}>
                <BsWallet2 />
              </div>
              <div className={classes.feesSection}>Responses & Grading</div>
            </button> */}

             {/* <button
              className={classes.courseBtn}
              onClick={showAssetsDetailsHandler}
              type="button"
              style={instituteAssetsMounted ? mountedButtonStyle : unmountedButtonStyle}
            >
              <div className={classes.coursesIcon}>
                <BsWalletFill />
              </div>
              <div className={classes.coursesSection}>Settings</div>
            </button> */}
             
            {/* <button
              className={classes.courseBtn}
              onClick={showTimeTableDetailsHandler}
              type="button"
              style={instituteTimeTableMounted ? mountedButtonStyle : unmountedButtonStyle}
            >
              <div className={classes.coursesIcon}>
                <BsTable />
              </div>
              <div className={classes.coursesSection}>Time Table</div>
            </button> */}

            {/* <button
              className={classes.courseBtn}
              onClick={showNoticesDetailsHandler}
              type="button"
              style={instituteNoticesMounted ? mountedButtonStyle : unmountedButtonStyle}
            >
              <div className={classes.coursesIcon}>
                <BsCalendar4Event />
              </div>
              <div className={classes.coursesSection}>Notices</div>
            </button>

            <button
              className={classes.courseBtn}
              onClick={showLeaveApplicationDetailsHandler}
              type="button"
              style={instituteLeaveAppMounted ? mountedButtonStyle : unmountedButtonStyle}
            >
              <div className={classes.coursesIcon}>
                <BsClipboardCheck />
              </div>
              <div className={classes.coursesSection}>Leave Application</div>
            </button> */}


            {/* <button
              className={classes.courseBtn}
              type="button"
            >
              <div className={classes.coursesIcon}>
                <BsJournalBookmarkFill />
              </div>
              <div className={classes.coursesSection}>Rules and regulations</div>
            </button>


            <button
              className={classes.courseBtn}
              type="button"
            >
              <div className={classes.coursesIcon}>
                <BsGrid3X3Gap />
              </div>
              <div className={classes.coursesSection}>Tickets </div>
            </button>


            <button
              className={classes.courseBtn}
              type="button"
            >
              <div className={classes.coursesIcon}>
                <BsEnvelope />
              </div>
              <div className={classes.coursesSection}>Email </div>
            </button>

            <button
              className={classes.courseBtn}
              type="button"
              onClick={showBulkMessagesHandler}
              style={instituteBulkMessagesMounted ? mountedButtonStyle : unmountedButtonStyle}

            >
              <div className={classes.coursesIcon}>
                <FaSms />
              </div>
              <div className={classes.coursesSection}>Bulk SMS </div>
            </button> */}

            {/*
            <button
              className={classes.courseBtn}
              type="button"
            >
              <div className={classes.coursesIcon}>
                <BsJournalBookmarkFill />
              </div>
              <div className={classes.coursesSection}>Website </div>
            </button>

            <button
              className={classes.courseBtn}
              type="button"
            >
              <div className={classes.coursesIcon}>
                <BsJournalBookmarkFill />
              </div>
              <div className={classes.coursesSection}>Admission </div>
            </button>

            <button
              className={classes.courseBtn}
              type="button"
            >
              <div className={classes.coursesIcon}>
                <BsJournalBookmarkFill />
              </div>
              <div className={classes.coursesSection}>Library Management</div>
            </button>


            <button
              className={classes.courseBtn}
              type="button"
            >
              <div className={classes.coursesIcon}>
                <BsJournalBookmarkFill />
              </div>
              <div className={classes.coursesSection}>Hostel Management </div>
            </button>
            */}




          </div>
        </div>

        <div className={classes.parentClass}>

          {showInstituteDetails &&  
            <Dashboard
              passMountInfo={setInstituteProfileMounted}
            
            />
          }

          {showPeopleDetails &&  
            <Questions passMountInfo={setInstitutePeopleMounted}
            
            />
          }


          {showBatchDetails && <Test passMountInfo={setInstituteBatchesMounted}
         
          />}





{showAttendanceDetails &&
            <UserReport
              passMountInfo={setInstituteAttendanceMounted}
              
            />}



          {/* {showAttendanceDetails &&
            <Attednace
              passMountInfo={setInstituteAttendanceMounted}
              userData={props.userData}
              institute={oneInstituteDetail}
              isAdminOrOwner={isAdminOrOwner}
              isOwner={isOwner}
              rerender={rerenderHandler}
              updateIsEditable={updateIsEditable}
            />}
        
          {/* {showTimeTableDetails && <TimeTable passMountInfo={setInstituteTimeTableMounted}
            selectedInstitute={oneInstituteDetail}
            userData={props.userData}
            rerender={rerenderHandler}
            isAdminOrOwner={isAdminOrOwner}
            isOwner={isOwner}
          />}

          {showLeaveApplicationDetails && <LeaveApplication
            passMountInfo={setInstituteLeaveAppMounted}
            userData={props.userData}
            institute={oneInstituteDetail}
            isAdminOrOwner={isAdminOrOwner}
            isOwner={isOwner}
            rerender={rerenderHandler}
          />}

          {showNotices && <Notices passMountInfo={setinstituteNoticesMounted}
            selectedInstitute={oneInstituteDetail}
            userData={props.userData}
            rerender={rerenderHandler}
            isAdminOrOwner={isAdminOrOwner}
            isOwner={isOwner}
          />}

          {showBulkMessages && <Sms passMountInfo={setInstituteBulkMessagesMounted}
            selectedInstitute={oneInstituteDetail}
            userData={props.userData}
            rerender={rerenderHandler}
            isAdminOrOwner={isAdminOrOwner}
            isOwner={isOwner}
          />} */}




        </div>

      </div>


    </div>
  );
};
export default InstituteContentDiv;
