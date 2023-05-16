
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Resume from './routes/Resume';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/projects' element={<Projects />} />

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
