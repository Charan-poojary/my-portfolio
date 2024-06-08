import Sidebar from './components/sidebar';
import { Route, Routes,  } from 'react-router-dom';
import Layout from './components/Layout/layout';
import Projects from './components/Projects';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.scss';


function App() {
  return (
   <>
   <Sidebar/>
   <Routes>
    <Route path="/" element ={<Layout />}>
      <Route index element ={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="project" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      </Route>
      </Routes>
      </>
  )
}

export default App;
