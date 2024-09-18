import logo from './logo.svg';
import './App.css';
import TitleCard from './components/Titlecard/Titlecard.js'
import Navbar from './components/Navbar/Navbar.js'

import AboutPage from './Pages/AboutPage/AboutPage.js';

function App() {
  return (
      <div className = 'ContentColumn'>
        <TitleCard/>
        <Navbar/>
        {/* Main page logic based on url */}
        <AboutPage/>
      </div>
  );
}

export default App;
