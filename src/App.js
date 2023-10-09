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
import Footer from './Navigation/Footer';
import { Fragment, useState } from 'react'

function App() {
  const [current, setCurrent] = useState("home");
  return (
  <div className='h-full'>
    <Router className="bg-black">
      <Navbar current={current} setCurrent={(current) => setCurrent(current)}/>
      <Routes>
        <Route path='/navar-web' element={<Home />} />
        <Route path='navar-web/devops' element={<Devops />} />
        <Route path='navar-web/nose' element={<Cloud />} />
        <Route path='navar-web/others' element={<Others />} />
        <Route path='navar-web/web-development' element={<Webdev />} />
        <Route path='navar-web/about' element={<About />} />
        <Route path='navar-web/contact' element={<Contact />} />
      </Routes>
      <Footer current={current} setCurrent={(current) => setCurrent(current)}/>
    </Router>
  </div>
  );
}

export default App;
