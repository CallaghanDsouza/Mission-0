import './App.css';
import Navbar from './Mainpage-components/Navbar/Navbar.js';
import Homepage from './Mainpage-components/Homepage/Homepage .js';
import Footer from './Mainpage-components/Footer/Footer.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
    <Route path='/' element={<Homepage/>} />
    </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;
