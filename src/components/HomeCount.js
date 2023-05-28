import PureCounter from "@srexi/purecounterjs";
import { useEffect } from "react";

function HomeCount(props) {


    useEffect(() => {
        new PureCounter();
      }, [])
    

    return (
        <class className="count" class="counts section-bg">
        <div class="container">
  
          <div class="row counters">
  
            <div class="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="350" data-purecounter-duration="1" class="purecounter"></span>
              <p>Personas Alcanzadas</p>
            </div>
  
            <div class="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="22" data-purecounter-duration="1" class="purecounter"></span>
              <p>Colaboradores</p>
            </div>
  
            <div class="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="4" data-purecounter-duration="1" class="purecounter"></span>
              <p>Instituciones Involucradas</p>
            </div>
  
            <div class="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="3" data-purecounter-duration="1" class="purecounter"></span>
              <p>Proyectos Activos</p>
            </div>
  
          </div>
  
        </div>
      </class>
    );
}

export default HomeCount;