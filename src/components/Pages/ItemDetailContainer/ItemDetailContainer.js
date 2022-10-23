import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gFetch } from '../../Helpers/gFecth';
import { ItemDetail } from '../../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { idProduct } = useParams();

    useEffect(() => {
        gFetch().then((res) => setProduct(res.find((product) => product.id === idProduct)));
    });

    return product.id ? (
        <section className="itemDetailContainer container">
            <ItemDetail product={product} />
        </section>
    ) : (
        'Cargando...'
    );
};
