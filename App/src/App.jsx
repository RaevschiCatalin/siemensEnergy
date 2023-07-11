import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Main from './Components/Main';
import Forecast from './Components/Forecast';

function App() {
  // const [latitude, setLatitude] = useState(null);
  // const [longitude, setLongitude] = useState(null);
  // //get user location
  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(success, error);
  //   } else {
  //     console.log("Geolocation not supported");
  //   }
  // }, []);

  return (
    <Router>
    <> 
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/forecast" element={<Forecast/>} />
      {/* <Route path="/chart" element={<Chart/>}/> */}
    </Routes>
</>
    <Navbar />
    <Footer />
</Router>
);}

export default App;
