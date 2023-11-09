import logo from './icons/logo.svg';
import Home from './pages/Home'
import Devops from './pages/Devops'
import Cloud from './pages/Cloud'
import Webdev from './pages/Webdev'
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navigation/NavBar';
import Footer from './Navigation/Footer';
import { Fragment, useState } from 'react'
import OurWork from './pages/OurWork';
import ScrollToTop from './Navigation/ScrollToTop';
import Privacy from './pages/Privacy';

function App() {
  const [current, setCurrent] = useState(() => {

    const currentPath = window.location.pathname;
    console.log(currentPath)

    if (currentPath == '' || currentPath == '/') return 'home';
    else if (currentPath == '/about') return 'about';
    else if (currentPath == '/our-work') return 'our-work';
    else if (currentPath == '/contact') return 'contact';
    else if (currentPath == '/web-design') return 'services';
    else if (currentPath == '/cloud-solutions') return 'services';
    else if (currentPath == '/devops') return 'services';
    else return ""
  });

  const marginTop = 'mt-[80px]'

  const paths = [
    { name: 'Home', element: <Home className={marginTop} setCurrent={setCurrent} />, path: '/' },
    { name: 'Web Design', element: <Webdev className={marginTop} setCurrent={setCurrent} />, path: '/web-design/' },
    { name: 'Cloud Solutions', element: <Cloud className={marginTop}/>, path: '/cloud-solutions/' },
    { name: 'Devops', element: <Devops className={marginTop}/>, path: '/devops/' },
    { name: 'Contact Us', element: <Contact className={marginTop}/>, path: '/contact' },
    { name: 'Our Work', element: <OurWork className={marginTop} />, path: '/our-work/' },
    { name: 'About Us', element: <About className={marginTop}/>, path: '/about/' },
    { name: 'Privacy Policy', element: <Privacy className={marginTop}/>, path: '/privacy-policy' },
  ]

  return (
    <Router className='black'>
      <ScrollToTop />
      <Navbar current={current} setCurrent={(current) => setCurrent(current)} />
      <Routes>
        {paths.map((path) => {
          return <Route path={path.path} element={path.element} />
        })}
      </Routes>
      <Footer current={current} setCurrent={(current) => setCurrent(current)} />
      
    </Router>
  );
}

export default App;
