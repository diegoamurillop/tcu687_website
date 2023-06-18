import ProjectList from "../../components/ProjectList/ProjectList";
import Headline from "../../common/Headline/Headline";

function ProjectPage() {

    return (
        <div className="project-page">
            <Headline
                title="Proyectos"
                supportText="Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium."
            />
            <section id="project-page__projects" className="project-page__projects container">
                <ProjectList />
            </section>
        </div>

    )
}

export default ProjectPage;
