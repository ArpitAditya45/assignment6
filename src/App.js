
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Home from './Home/Home';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/About/About"element={<About/>}>
      </Route>
      <Route path='/Skills/Skills' element={<Skills/>}></Route>
      <Route path='/Projects/Projects' element={<Projects/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
