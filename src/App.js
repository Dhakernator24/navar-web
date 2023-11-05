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

    if (currentPath == '' || currentPath == '/') return 'home';
    else if (currentPath == '/about/') return 'about';
    else if (currentPath == '/contact/') return 'contact';
    else if (currentPath == '/web-design/') return 'services';
    else if (currentPath == '/cloud-solutions/') return 'services';
    else if (currentPath == '/devops/') return 'services';
    else return ""
  });

  const marginTop = 'mt-[80px]'

  const paths = [
    { name: 'Home', element: <Home className={marginTop} setCurrent={setCurrent} />, path: '/' },
    { name: 'Web Design', element: <Webdev className={marginTop} />, path: '/web-design/' },
    { name: 'Cloud Solutions', element: <Cloud />, path: '/cloud-solutions/' },
    { name: 'Devops', element: <Devops />, path: '/devops/' },
    { name: 'Contact Us', element: <Contact />, path: '/contact' },
    { name: 'Our Work', element: <OurWork className={marginTop} />, path: '/our-work/' },
    { name: 'About Us', element: <About />, path: '/about/' },
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
