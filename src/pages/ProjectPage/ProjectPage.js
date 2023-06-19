import ProjectList from "../../components/ProjectList/ProjectList";
import Headline from "../../common/Headline/Headline";
import BackToTop from "../../common/BackToTop/BackToTop";

function ProjectPage() {

    return (
        <div className="project-page">
            <Headline
                title="Proyectos"
                supportText="Conoce los proyectos que hemos realizado en el pasado y los que estamos realizando actualmente."
            />
            <section id="project-page__projects" className="project-page__projects container">
                <ProjectList />
            </section>

            <BackToTop />
        </div>

    )
}

export default ProjectPage;
