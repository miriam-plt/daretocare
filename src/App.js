import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Spotlight from './Pages/Spotlight';
import Error from './Pages/Error';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/artist-spotlight" element={<Spotlight />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;