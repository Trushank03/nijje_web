import React, { useState } from 'react';
import './App.css';
import classes from './Login.module.css';
import flagIndia from './India.png';
import Sidebar from './Sidebar/Sidebar';
import goggle from './google.jpg';

function Login({ onLoginSuccess }) {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [showOtpComponent, setShowOtpComponent] = useState(false);

  const handleSendOtp = () => {
    if (phone.length === 10) {
      setShowOtpComponent(true);
      // alert('OTP sent to your phone number!');
    } else {
      alert('Please enter a valid 10-digit phone number.');
    }
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join(''); // Combine the 4 boxes into one OTP
    if (enteredOtp === '1234') {
      onLoginSuccess();
    } else {
      alert('Invalid OTP, please try again.');
    }
  };

  const handleOtpChange = (value, index) => {
    // Update the specific index in the OTP array
    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(-1); // Ensure only one digit is added
    setOtp(updatedOtp);

    // Automatically move to the next input if a value is entered
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  return (
    <div className="Login">
      <div className={classes.mainContainer}>
        <div className={classes.bodyContainer}>
          <div className={classes.secondContainer}>
            <div className={classes.leftContainer}>
              {!showOtpComponent ? (
                <>
                  <div className={classes.textContainer}>
                    <div className={classes.headContainer}>
                      <b>Get Started</b>
                    </div>
                  </div>
                  <div className={classes.firstInput}>
                    <div className={classes.flagcode}>
                      <img className={classes.flagImg} src={flagIndia} alt="logo" />
                      <div className={classes.countryCode}>+91</div>
                    </div>
                    <input
                      type="number"
                      className={classes.textInput}
                      placeholder="Enter your number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className={classes.thirdInput4}>
                    <button
                      className={classes.signInButton}
                      type="button"
                      onClick={handleSendOtp}
                    >
                      GET OTP
                    </button>
                    <div className={classes.dividerContainer}>
                <div className={classes.leftDivider}>

                </div>
                <div className={classes.textDivider}>
                  OR
                </div>
                <div className={classes.rightDivider}>

                </div>
              </div>
              <div className={classes.secondInput}>
                <button>
                  <img src={goggle}  alt="google" />
                  <div className={classes.googleDiv}>
                    Continue with google
                  </div>
                </button>
              </div>

              <div className={classes.termsContainer}>
                <input type="checkbox" defaultChecked className={classes.checkBox} />
                &nbsp;&nbsp;By continuing you are agreeing to our&nbsp;
                <a href="https://diracai.com/TermsofUse">terms of service</a> and <a href="https://diracai.com/Privacypolicy">privacy policy.</a>
              </div>

                  </div>
                </>
              ) : (
                <div className={classes.otpContainer}>
                  <h2>Verify OTP</h2>
                  <div className={classes.otpInputContainer}>
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        className={classes.otpBox}
                        value={digit}
                        onChange={(e) => handleOtpChange(e.target.value, index)}
                        maxLength="1"
                      />
                    ))}
                  </div>
                  <button
                    className={classes.submitOtpButton}
                    onClick={handleVerifyOtp}
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? <Sidebar /> : <Login onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
}

export default App;
