import Card from 'react-bootstrap/Card';
import { useCartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';

export const ItemDetail = ({ product }) => {
    const { addItem } = useCartContext();
    const onAdd = (quantity) => {
        addItem({ ...product, quantity }, quantity);
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    Precio ${product.price} Stock: {product.stock}
                </Card.Text>
                <ItemCount stock={product.stock} onAdd={onAdd} />
            </Card.Body>
        </Card>
    );
};
