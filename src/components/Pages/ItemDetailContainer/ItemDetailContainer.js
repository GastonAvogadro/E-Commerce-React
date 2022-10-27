import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { idProduct } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryDoc= doc(db, 'products', idProduct);
        getDoc(queryDoc)
            .then((resp) => setProduct({ id: resp.id, ...resp.data() }))
            .catch((err) => console.log(err));
    }, [idProduct]);

    return product.id ? (
        <section className="container">
            <ItemDetail product={product} />
        </section>
    ) : (
        'Cargando...'
    );
};
