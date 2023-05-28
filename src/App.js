import { useEffect } from 'react';
import './App.css';
import Header from './components/HomeHeader';
import Home from './components/Home';
import AOS from 'aos'
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
