import CustomCard from "../CustomCard/CustomCard";
import { Row, Col } from "react-bootstrap";

function CardList({cards = []}) {

    return (
        <Row xs={1} md={3} className="g-4">
            {cards.map((card, key) => (
                <Col key={key}>
                    <CustomCard img={ require(`../../data/img/${card.img}`)}
                        tag={card.tag}
                        title={card.title}
                        description={card.description}
                        date={card.date}
                    />
                </Col>
            ))}
        </Row>
    );
}


export default CardList;