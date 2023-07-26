import Headline from "../../components/common/Headline/Headline";
import projectsJSON from "../../data/projects.json";
import CardList from "../../components/common/CardList/CardList";
import "./ProjectPage.css"

function ProjectPage() {

    return (
        <div className="project-page">
            <Headline
                title="Proyectos"
                supportText="Conoce los proyectos que hemos realizado en el pasado y los que estamos realizando actualmente."
            />
            <section id="project-page__projects" className="project-page__projects container" data-aos="fade-up">
                <CardList cards={projectsJSON.projects} />
            </section>
        </div>

    )
}

export default ProjectPage;
