import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import "./Notification.css"
const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []);
  return (
    <div>
      {children}
      {/* isLoggedIn && appointmentData && */}
      {true && (
        <>
        
          <div className="appointment-card">
            <div className="appointment-card__content">
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                <strong>Doctor: Dr. Kevin Miller</strong> 
                <strong>Name: Wesam</strong> 
                <strong>Speciality: Dentist</strong> 
                <strong>phone number: 62222202</strong> 
                <strong>Appointment time: 11:00 AM</strong> 
                <strong>Appointment date: 2024-11-11</strong> 

              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notification;