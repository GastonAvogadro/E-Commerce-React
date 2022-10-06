import './CartWidget.css'

export const CartWidget = () => {
    return (
        <>
            <img src='./assets/img/carrito.png' className='cartIcon' alt='cart icon' />
            <p className='cartNumber'>0</p>
        </>
    );
};
