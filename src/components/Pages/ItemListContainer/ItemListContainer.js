import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Pulsar } from '@uiball/loaders';
import { BackgroundImg } from '../../BackgroundImg/BackgroundImg';
import { ItemList } from '../../ItemList/ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'products');
        if (idCategory) {
            const queryFilter = query(queryCollection, where('category', '==', idCategory));
            getDocs(queryFilter)
                .then((resp) => setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        } else {
            getDocs(queryCollection)
                .then((resp) => setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        }
    }, [idCategory]);

    return (
        <section className="container-xxl">
            <BackgroundImg />
            {loading ? (
                <div className='d-flex justify-content-center mt-4'>
                    <Pulsar size={100} color="#C5C7CA" />
                </div>
            ) : (
                <ItemList listProducts={products} />
            )}
        </section>
    );
};
