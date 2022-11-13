import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ItemCount.css';

export const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);
    const [handleAdd, setHandleAdd] = useState(false);

    const addCount = () => count < stock && setCount(count + 1);
    const removeCount = () => count > 1 && setCount(count - 1);
    const addToCart = () => {
        onAdd(count);
        setHandleAdd(true);
    };

    return (
        <div className="itemCount">
            {handleAdd ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link to={'/'}>
                        <button className="btnKeepBuying">Seguir Comprando</button>
                    </Link>
                    <Link to={'/cart'}>
                        <button className="btnGoToCart">Ir al carrito</button>
                    </Link>
                </motion.div>
            ) : (
                <>
                    <button className="btnHandleCount" onClick={removeCount}>
                        <p>-</p>
                    </button>
                    <p className="numCount">{count}</p>
                    <button className="btnHandleCount" onClick={addCount}>
                        <p>+</p>
                    </button>
                    <button className="btnAddToCart" onClick={addToCart}>
                        Agregar al carrito
                    </button>
                </>
            )}
        </div>
    );
};
