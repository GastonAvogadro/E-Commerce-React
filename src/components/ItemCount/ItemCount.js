import { useState } from 'react';
import { Link } from 'react-router-dom';
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
                <>
                    <Link to={'/'}>
                        <button>Seguir Comprando</button>
                    </Link>
                    <Link to={'/cart'}>
                        <button>Ir al carrito</button>
                    </Link>
                </>
            ) : (
                <>
                    <p>Cantidad {count}</p>
                    <button onClick={removeCount}>-</button>
                    <button onClick={addCount}>+</button>
                    <button onClick={addToCart}>Agregar al carrito</button>
                </>
            )}
        </div>
    );
};
