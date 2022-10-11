import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css'

export const ItemDetail = ({id, name, price, stock, image}) => {
    return (
            <Card style={{ width: '18rem' }} key={id}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Precio ${price} Stock: {stock}
                    </Card.Text>
                    <ItemCount stock={stock} />
                    <Button variant="primary">Añadir al carrito</Button>
                </Card.Body>
            </Card>
    );
};
