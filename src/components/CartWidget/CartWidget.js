import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import './CartWidget.css';

export const CartWidget = ({ isOpen, handleOpen }) => {
    const { itemsInCart } = useCartContext();

    return (
        <Link to="/cart">
            <div onClick={handleOpen} className={`cartWidget ${isOpen ? 'cartWidgetNavbar' : ''}`}>
                <img src="https://i.ibb.co/ftMDjJR/suitcase.png" className="cartIcon" alt="cart icon" />
                <div className="cartNumber">
                    <p>{itemsInCart()}</p>
                </div>
            </div>
        </Link>
    );
};
