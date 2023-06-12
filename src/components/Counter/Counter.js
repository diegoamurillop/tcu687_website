import PureCounter from "@srexi/purecounterjs";
import "./Counter.css"
import { useEffect } from "react";

function Counter(props) {


  useEffect(() => {
    new PureCounter();
  }, [])


  const counter = (title, start, end) => {
    return (
      <div className="col-lg-3 col-6 text-center">
        <span data-purecounter-start={start} data-purecounter-end={end} data-purecounter-duration="1" className="purecounter"></span>
        <p>{title}</p>
      </div>
    )
  }

  return (
    <div id="counter" className="counter">
      <div className="container">
        <div id="counter__counters" className="counter__counters row">
          {counter("Personas Alcanzadas", 0, 350)}
          {counter("Colaboradores", 0, 2)}
          {counter("Instituciones Involucradas", 0, 4)}
          {counter("Proyectos Activos", 0, 3)}
        </div>
      </div>
    </div>
  );
}

export default Counter;