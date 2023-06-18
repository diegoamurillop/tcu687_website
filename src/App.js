import { useEffect } from 'react';
import Header from './pages/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import Footer from './pages/Footer/Footer';
import AOS from 'aos';
import ContactPage from './pages/ContactPage/ContactPage';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css"
import './css/style.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import "boxicons/css/boxicons.min.css"
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import "./App.css";
import PureCounter from "@srexi/purecounterjs";
import EventPage from './pages/EventPage/EventPage';

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
          <Route path={"/"} element={<HomePage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/sobrenosotros" element={<AboutPage />} />
          <Route path="/proyectos" element={<ProjectPage />} />
          <Route path="/eventos" element={<EventPage />} />



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
