import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../../ItemList/ItemList';
import { gFetch } from '../../Helpers/gFecth';
import './ItemListContainer.css';

export const ItemListContainer = ({ greeting }) => {
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
        <section>
            <h2 className="greeting">{greeting}</h2>
            <ItemList listProducts={products} />
        </section>
    );
};
