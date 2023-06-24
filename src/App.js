import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import EventPage from './pages/EventPage/EventPage';
import BackToTop from './common/BackToTop/BackToTop';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "boxicons/css/boxicons.min.css"
import "./App.css";

function App() {
  
  useEffect(() => {
    AOS.init({ duration: 1200});
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
        <BackToTop />
      </div>

      {/* <div id="preloader"/> */}
    </div>
  );
}

export default App;
