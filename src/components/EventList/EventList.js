import ProjectCard from "../../common/CustomCard/CustomCard";
import { Row, Col } from "react-bootstrap";

function EventList({events = []}) {

    return (
        <Row xs={1} md={3} className="g-4">
            {events.map((event, key) => (
                <Col key={key}>
                    <ProjectCard img={ require(`../../data/events/img/${event.img}`)}
                        tag={event.tag}
                        title={event.title}
                        description={event.description}
                    />
                </Col>
            ))}
        </Row>
    );
}


export default EventList;