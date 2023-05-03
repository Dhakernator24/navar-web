import logo from './icons/logo.svg';
import MainNavBar from './components/MainNavBar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Devops from './pages/Devops'
import Cloud from './pages/Cloud'
import Webdev from './pages/Webdev'
import About from './pages/About'
import Contact from './pages/Contact'
import Others from './pages/Others'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <MainNavBar/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/devops-solutions' element={<Devops/>} />
          <Route path='/cloud-solutions' element={<Cloud/>} />
          <Route path='/others' element={<Others/>} />
          <Route path='/web-development' element={<Webdev/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
