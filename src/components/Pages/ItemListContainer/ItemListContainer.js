import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Pulsar } from '@uiball/loaders';
import { motion } from 'framer-motion';
import { AnimatedPage } from '../../AnimatedPage/AnimatedPage';
import { BackgroundImg } from '../../BackgroundImg/BackgroundImg';
import { ItemList } from '../../ItemList/ItemList';
import { collection, getDocs, getFirestore, limit, query, where } from 'firebase/firestore';

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
            const queryFilter = query(queryCollection, limit(16));
            getDocs(queryFilter)
                .then((resp) => setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        }
    }, [idCategory]);

    return (
        <AnimatedPage>
            <section className="container-xxl">
                <BackgroundImg />
                {loading ? (
                    <div className="d-flex justify-content-center mt-5">
                        <Pulsar size={100} color="#C5C7CA" />
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <ItemList listProducts={products} />
                    </motion.div>
                )}
            </section>
        </AnimatedPage>
    );
};
