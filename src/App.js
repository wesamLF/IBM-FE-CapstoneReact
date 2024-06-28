// import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_Page from './components/LandngPage/Landing_Page';
import InstantConsultation from './components/InstantConsultationBooking/InstantConsultation';
import FindDoctorSearch from './components/FindDoctorSearch/FindDoctorSearch';
import Notification from './components/Notification/Notification';
import ReviewForm from './components/ReviewForm/ReviewForm';


import Navbar from './components/Navbar/Navbar';
import Login from "./components/Login/Login";
import Sign_Up from "./components/Sign_Up/Sign_Up";
import BookingConsultation from "./components/BookingConsultation";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ReportsLayout from "./components/ReportsLayout/ReportsLayout";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Notification>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing_Page />} />
            <Route path="/find-doctor" element={<FindDoctorSearch />} />
            <Route path="/instant-consultation" element={<BookingConsultation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Sign_Up />} />
            <Route path="/reviews" element={<ReviewForm />} />
            <Route path="/profile" element={<ProfileCard />} />
            <Route path="/reports" element={<ReportsLayout ></ReportsLayout>} />

          </Routes>
        </Notification>

      </BrowserRouter>

    </div>
  );
}

export default App;