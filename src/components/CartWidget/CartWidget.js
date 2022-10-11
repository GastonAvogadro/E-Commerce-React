import { Link } from 'react-router-dom';
import './CartWidget.css'

export const CartWidget = () => {
    return (
        <Link to ='/cart'>
            <img src='https://i.ibb.co/gW6pqbW/carrito.png' className='cartIcon' alt='cart icon' />
            <p className='cartNumber'>0</p>
        </Link>
    );
};
