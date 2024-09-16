import logo from './logo.svg';
import './App.css';
import TitleCard from './components/Titlecard/Titlecard.js'
import Navbar from './components/Navbar/Navbar.js'

function App() {
  return (
    <div className = 'Background'>
      <div className = 'ContentColumn'>
        <TitleCard/>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
