import Card from 'react-bootstrap/Card';
import "./CustomCard.css"

function CustomCard({ img, tag, title, description, date}) {

    return (
        <Card >
            {img && <Card.Img variant="top" src={img} />}
            <Card.Body>
                {tag && 
                (<div className="d-flex mb-3">
                    <h4 className="card-tag">{tag}</h4>
                </div>) 
                }
                <Card.Title as="h3">{title}</Card.Title>
                {date && <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>}
                <Card.Text className="text-justify">
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CustomCard;