import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Pulsar } from '@uiball/loaders';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { ItemDetail } from '../../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { idProduct } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const db = getFirestore();
        const queryDoc = doc(db, 'products', idProduct);
        getDoc(queryDoc)
            .then((resp) => {
                if (resp._document) {
                    setProduct({ id: resp.id, ...resp.data() });
                } else {
                    navigate('/NotFound404');
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [idProduct, navigate]);

    return (
        <section className="container">
            {loading ? (
                <div className="d-flex justify-content-center mt-4">
                    <Pulsar size={100} color="#C5C7CA" />
                </div>
            ) : (
                <ItemDetail product={product} />
            )}
        </section>
    );
};
