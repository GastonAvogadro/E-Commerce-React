import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackgroundImg } from '../../BackgroundImg/BackgroundImg';
import { ItemList } from '../../ItemList/ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import './ItemListContainer.css';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'products');
        if (idCategory) {
            const queryFilter = query(queryCollection, where('category', '==', idCategory));
            getDocs(queryFilter)
                .then((resp) => setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))))
                .catch((err) => console.log(err));
        } else {
            getDocs(queryCollection)
                .then((resp) => setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))))
                .catch((err) => console.log(err));
        }
    }, [idCategory]);

    return (
        <section className="container">
            <BackgroundImg />
            <ItemList listProducts={products} />
        </section>
    );
};
