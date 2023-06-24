import CustomCard from "../../common/CustomCard/CustomCard";
import { Row, Col } from "react-bootstrap";

function ProjectList({projects = []}) {

    return (
        <Row xs={1} md={3} className="g-4">
            {projects.map((project, key) => (
                <Col key={key}>
                    <CustomCard img={ require(`../../data/projects/${project.img}`)}
                        tag={project.tag}
                        title={project.title}
                        description={project.description}
                    />
                </Col>
            ))}
        </Row>
    );
}


export default ProjectList;