import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Ambulance from './Components/Ambulance';

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar/>
        <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/ambulance" element= {<Ambulance/>} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
