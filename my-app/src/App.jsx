import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TitleCard from './components/Titlecard/Titlecard.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import AboutPage from './Pages/AboutPage/AboutPage.jsx';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage.jsx';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage.jsx'; // Import the 404 Page component
import ContactPage from './Pages/ContactPage/Contact.jsx';

function App() {
  return (
    <Router>
      <div className='Background'>
        <div className='ContentColumn'>
          <TitleCard />
          <Navbar />
          
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;