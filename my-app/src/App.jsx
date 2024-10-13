import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TitleCard from './components/Titlecard/Titlecard.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import AboutPage from './Pages/AboutPage/AboutPage.jsx';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage.jsx';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage.jsx';
import ContactPage from './Pages/ContactPage/Contact.jsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Container for TitleCard, Navbar, and content */}
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:w-[75vw] sm:w-[90vw] transition-all duration-300 ease-in-out">
          <TitleCard />
          <Navbar />
          
          {/* Routes for different pages */}
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
