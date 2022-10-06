import { useEffect, useState } from 'react';
import { gFetch } from '../Helpers/gFecth';
import { Item } from '../Item/Item';
import './ItemList.css'

export const ItemList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        gFetch().then((res) => setProducts(res));
    }, []);

    return (
        <section className='itemList container'>
            {products.map((product) => (
                <Item
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
