import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import './CartWidget.css';

export const CartWidget = () => {
    const { itemsInCart } = useCartContext();

    return (
        <Link to="/cart">
            <img src="https://i.ibb.co/gW6pqbW/carrito.png" className="cartIcon" alt="cart icon" />
            <p className="cartNumber">{itemsInCart()}</p>
        </Link>
    );
};
