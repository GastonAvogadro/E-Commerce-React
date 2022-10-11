import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({ id, name, price, stock, image }) => {
    return (
        <Link to={`/detail/${id}`}>
            <Card style={{ width: '18rem' }} key={id}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Precio ${price} Stock: {stock}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
};
