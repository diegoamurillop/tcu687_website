import { useEffect } from 'react';
import Header from './pages/header/Header';
import Home from './pages/home/Home';
import Footer from './pages/footer/Footer';
import AOS from 'aos';
import Contact from './pages/contact/Contact';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css"
import './css/style.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import "boxicons/css/boxicons.min.css"
import { Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import "./App.css";
import PureCounter from "@srexi/purecounterjs";


function App() {

  useEffect(() => {
    AOS.init({ duration: 1200});
    new PureCounter();
  }, [])


  return (
    <div id="app" className="app">
      <Header />

      <div id="app__body" className="app__body">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/sobrenosotros" element={<About />} />

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
