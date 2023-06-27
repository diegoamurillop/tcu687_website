import CustomCard from "../../common/CustomCard/CustomCard";
import { Row, Col } from "react-bootstrap";

function CardList({details = []}) {

    return (
        <Row xs={1} md={3} className="g-4">
            {details.map((detail, key) => (
                <Col key={key}>
                    <CustomCard img={ require(`../../data/projects/img/${detail.img}`)}
                        tag={detail.tag}
                        title={detail.title}
                        description={detail.description}
                    />
                </Col>
            ))}
        </Row>
    );
}


export default CardList;