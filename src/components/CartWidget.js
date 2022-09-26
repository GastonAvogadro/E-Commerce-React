import cartIcon from '../img/carrito.png';

export const Cart = () => {
    return (
        <>
            <img src={cartIcon} className='cartIcon' alt='cart icon' />
            <p className='cartNumber'>0</p>
        </>
    );
};
