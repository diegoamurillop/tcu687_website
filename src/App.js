import { useEffect } from 'react';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import AOS from 'aos';
import Contact from './pages/Contact/Contact';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css"
import './css/style.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import "boxicons/css/boxicons.min.css"
import { Routes, Route } from 'react-router-dom';
import "./App.css";

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id="app" className="app">
      <Header />

      <div id="app__body" className="app__body">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
      {/* <div id="preloader"/> */}
    </div>
  );
}

// q: how to add more than one path to route?
// a: use the "element" prop instead of "component" prop

export default App;
