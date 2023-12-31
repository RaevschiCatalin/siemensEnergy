import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Main from './Components/Main';
import Forecast from './Components/Forecast';

function App() {
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
