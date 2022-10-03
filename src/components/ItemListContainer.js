import { useEffect, useState } from 'react';
import { ItemCount } from './ItemCount';
import { gFetch } from './gFecth';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        gFetch().then((res) => setProducts(res));
    }, []);

    return (
        <>
            <h2 className="greeting">{props.greeting}</h2>
            {products.map((product) => (
                <Card style={{ width: '18rem' }} className="container" key={product.id}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            Precio ${product.price} Stock: {product.stock}
                        </Card.Text>
                        <Button variant="primary">Añadir al carrito</Button>
                        <ItemCount stock={product.stock} />
                    </Card.Body>
                </Card>
            ))}
            
        </>
    );
};
