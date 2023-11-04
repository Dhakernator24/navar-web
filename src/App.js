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

function App() {
  const [current, setCurrent] = useState(() => {

    const currentPath = window.location.pathname;
    console.log(currentPath)

    if (currentPath == '/navar-web' || currentPath == '/navar-web/') return 'home';
    else if (currentPath == '/navar-web/about/') return 'about';
    else if (currentPath == '/navar-web/contact/') return 'contact';
    else if (currentPath == '/navar-web/web-design/') return 'services';
    else if (currentPath == '/navar-web/cloud-solutions/') return 'services';
    else if (currentPath == '/navar-web/devops/') return 'services';
    else return ""
  });

  const marginTop = 'mt-[80px]'

  const paths = [
    { name: 'Home', element: <Home className={marginTop} setCurrent={setCurrent} />, path: '/navar-web/' },
    { name: 'Web Design', element: <Webdev className={marginTop} />, path: 'navar-web/web-design/' },
    { name: 'Cloud Solutions', element: <Cloud />, path: 'navar-web/cloud-solutions/' },
    { name: 'Devops', element: <Devops />, path: 'navar-web/devops/' },
    { name: 'Contact Us', element: <Contact />, path: 'navar-web/contact' },
    { name: 'Our Work', element: <OurWork displayPage='our-work' />, path: 'navar-web/our-work/' },
    { name: 'About Us', element: <About />, path: 'navar-web/about/' },
  ]

  return (
    <div className='h-full'>
      <Router className="bg-black">
        <Navbar current={current} setCurrent={(current) => setCurrent(current)} />
        <Routes>
          {paths.map((path) => {
            return <Route path={path.path} element={path.element} />
          })}
        </Routes>
        <Footer current={current} setCurrent={(current) => setCurrent(current)} />
      </Router>
    </div>
  );
}

export default App;
