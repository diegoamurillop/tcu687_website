import { useEffect } from "react";



function HomeAbout(props) {
    return (
        <section className="about" class="about">
        <div class="container" data-aos="fade-up">
  
          <div class="row">
            <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
              <img src="assets/img/about.jpg" class="img-fluid" alt=""/>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>Importancia del TCU</h3>
              <p class="fst-italic">
                El trabajo comunal universitario es una actividad académica cuya finalidad es involucrar a las personas estudiantes de la universidad, en diversos proyectos comunitarios con el fin de promover el desarrollo social y económico de las comunidades locales. Esta práctica académica tiene una gran importancia tanto para la comunidad como para las personas estudiantes de las universidades, ya que posibilita contribuir al desarrollo comunitario, fomentar la responsabilidad social, desarrollar habilidades y competencias, y mejorar la calidad de la educación.
              </p>
              <h3>¿Qué hacemos en el TCU-687?</h3>
              <p class="fst-italic">
                El TCU 687 Creación de espacios de fortalecimiento de habilidades para la vida que prevengan el consumo de drogas en la adolescencia y la juventud (TC-687) de en la Escuela de Enfermería de la Universidad de Costa Rica (UCR), tiene como objetivo capacitar a las personas jóvenes universitarias en habilidades cognitivas, sociales y emocionales que les permitan tomar decisiones saludables, al igual que prevenir el consumo de sustancias psicoactivas.
              </p>
            </div>
          </div>
  
        </div>
      </section>
    );
}

export default HomeAbout;