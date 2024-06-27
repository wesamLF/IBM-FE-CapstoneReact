// import React, { useEffect } from 'react';

import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Landing_Page from './components/LandnPage/Landing_Page';


import Navbar from './components/Navbar/Navbar';
function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<Landing_Page/>}/>

              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;