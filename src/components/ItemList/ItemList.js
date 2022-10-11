import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gFetch } from '../Helpers/gFecth';
import { Item } from '../Item/Item';
import './ItemList.css';

export const ItemList = () => {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        if (idCategory) {
            gFetch().then((res) => setProducts(res.filter((product) => product.category === idCategory)));
        } else {
            gFetch().then((res) => setProducts(res));
        }
    }, [idCategory]);

    return (
        <section className="itemList container">
            {products.map((product) => (
                <Item
                    id={product.id}
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    stock={product.stock}
                    image={product.image}
                />
            ))}
        </section>
    );
};
