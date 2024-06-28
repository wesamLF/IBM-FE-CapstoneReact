// import React, { useEffect } from 'react';

import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Landing_Page from './components/LandngPage/Landing_Page';
import InstantConsultation from './components/InstantConsultationBooking/InstantConsultation';  
import FindDoctorSearch from './components/FindDoctorSearch/FindDoctorSearch';  


import Navbar from './components/Navbar/Navbar';
import Login from "./components/Login/Login";
import Sign_Up from "./components/Sign_Up/Sign_Up";
import BookingConsultation from "./components/BookingConsultation";
function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/find-doctor" element={<FindDoctorSearch />} />

              <Route path="/instant-consultation" element={<BookingConsultation />} />
              <Route path="/" element={<Landing_Page/>}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/signup" element={<Sign_Up />}/>

              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;