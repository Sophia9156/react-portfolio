import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Store from './store/store';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './routes/About';
import Home from './routes/Home';
import Works from './routes/Works';
import Cursor from './components/Cursor';

function App() {
  return (
    <Store>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
        </Routes>
        <Footer />
        <Cursor />
      </Router>
    </Store>
  );
}

export default App;
