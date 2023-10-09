import logo from './icons/logo.svg';
import Home from './pages/Home'
import Devops from './pages/Devops'
import Cloud from './pages/Cloud'
import Webdev from './pages/Webdev'
import About from './pages/About'
import Contact from './pages/Contact'
import Others from './pages/Others'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navigation/NavBar';
import Footer from './components/Footer';

function App() {
  return (
  <div className='h-full'>
    <Router className="bg-black">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/devops-solutions' element={<Devops />} />
        <Route path='/cloud-solutions' element={<Cloud />} />
        <Route path='/others' element={<Others />} />
        <Route path='/web-development' element={<Webdev />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </div>
  );
}

export default App;
