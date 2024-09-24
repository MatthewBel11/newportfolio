import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TitleCard from './components/Titlecard/Titlecard.js';
import Navbar from './components/Navbar/Navbar.js';
import AboutPage from './Pages/AboutPage/AboutPage.js';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage.js'


function App() {
  return (
    <Router>
      <div className='Background'>

        
        <div className='ContentColumn'>
          <TitleCard />
          <Navbar />
          
          {/* Define Routes for each page */}
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={''} />
          </Routes>
        </div>


      </div>
    </Router>
  );
}

export default App;
