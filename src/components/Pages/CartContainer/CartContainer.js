import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext';

export const CartContainer = () => {
    const { cartList, emptyCart, removeItem, cartTotalPrice } = useCartContext();

    return (
        <div>
            {cartList.length === 0 ? (
                <>
                    <p>no hay items</p>
                    <Link to={'/'}>
                        <button>comprar productos</button>
                    </Link>
                </>
            ) : (
                <>
                    {cartList.map((product) => (
                        <>
                            <div key={product.id}>
                                {product.name}
                                {product.quantity}
                                <button onClick={() => removeItem(product.id)}>Eliminar</button>
                            </div>
                        </>
                    ))}
                    <div>
                        <p>Precio total = $ {cartTotalPrice()}</p>
                        <button onClick={emptyCart}>Vaciar carrito</button>
                    </div>
                </>
            )}
        </div>
    );
};
