import { useEffect, useState } from 'react';
import { gFetch2 } from '../../Helpers/gFecth';
import { ItemDetail } from '../../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        gFetch2().then((res) => setProduct(res));
    }, []);

    return (
        <section className='itemDetailContainer container'>
            {product.map((product) => (
                <ItemDetail
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    stock={product.stock}
                    category={product.category}
                    image={product.image}
                />
            ))}
        </section>
    );
};
