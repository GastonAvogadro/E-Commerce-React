import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount';
import './Item.css'

export const Item = ({id, name, price, stock, category, image}) => {
    return (
        <>
            <Card style={{ width: '18rem' }} key={id}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Precio ${price} Stock: {stock}
                    </Card.Text>
                    <Button variant="primary">Ver detalles</Button>
                    <ItemCount stock={stock} />
                </Card.Body>
            </Card>
        </>
    );
};
