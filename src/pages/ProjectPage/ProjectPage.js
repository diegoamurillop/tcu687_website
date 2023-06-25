import ProjectList from "../../components/ProjectList/ProjectList";
import Headline from "../../common/Headline/Headline";
import projectsJSON from "../../data/projects/projects.json";
import "./ProjectPage.css"

function ProjectPage() {

    return (
        <div className="project-page">
            <Headline
                title="Proyectos"
                supportText="Conoce los proyectos que hemos realizado en el pasado y los que estamos realizando actualmente."
            />
            <section id="project-page__projects" className="project-page__projects container">
                <ProjectList projects={projectsJSON.projects} />
            </section>
        </div>

    )
}

export default ProjectPage;
