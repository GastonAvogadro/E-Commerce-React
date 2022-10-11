import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gFetch } from '../../Helpers/gFecth';
import { ItemDetail } from '../../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const { idProduct } = useParams();

    useEffect(() => {
        gFetch().then((res) => setProduct(res.find((product) => product.id === idProduct)));
    }, [idProduct]);

    return (
        <section className="itemDetailContainer container">
            <ItemDetail
                id={product.id}
                key={product.id}
                name={product.name}
                price={product.price}
                stock={product.stock}
                image={product.image}
            />
        </section>
    );
};
