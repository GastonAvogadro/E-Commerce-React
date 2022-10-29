import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BackgroundImg } from '../../BackgroundImg/BackgroundImg';
import { useCartContext } from '../../../context/CartContext';
import { OrderForm } from '../../OrderForm/OrderForm';
import './CartContainer.css';

export const CartContainer = () => {
    const { cartList, emptyCart, removeItem, cartTotalPrice } = useCartContext();
    const [orderId, setOrderId] = useState('');
    const [formSent, setFormSent] = useState(false);

    const showModal = () => {
        const closeModal = () => setFormSent(false);

        return (
            <>
                <div className="overlay">
                    <div className="modal__locked">
                        <h4>Se ha enviado un correo con su número de orden</h4>
                        <p>Número de orden: {orderId}</p>
                        <button onClick={closeModal}>Aceptar</button>
                    </div>
                </div>
            </>
        );
    };

    return (
        <section className="container">
            <div className="cartContainer">
                {formSent && showModal()}
                <BackgroundImg />

                {cartList.length === 0 ? (
                    <div className="cartEmpty">
                        <p>No hay productos por acá!</p>
                        <Link to={'/'}>
                            <button>Ver productos</button>
                        </Link>
                    </div>
                ) : (
                    <div className="cartFull row">
                        {cartList.map((product) => (
                            <div className="col-6" key={product.id}>
                                <div className="card">
                                    <div className="row g-0">
                                        <div className="cartImg col-md-4">
                                            <img
                                                src={product.image}
                                                className="img-fluid rounded-start"
                                                alt={product.title}
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h3 className="card-title">{product.title}</h3>
                                                <p className="card-text">{product.description}</p>
                                                <p>Cantidad: {product.quantity}</p>
                                                <p>Precio = ${product.price * product.quantity}</p>
                                            </div>
                                            <div>
                                                <button onClick={() => removeItem(product.id)}>Eliminar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div>
                            <p>Precio total = $ {cartTotalPrice()}</p>
                            <button onClick={emptyCart}>Vaciar carrito</button>
                        </div>
                        <OrderForm setOrderId={setOrderId} setFormSent={setFormSent} />
                    </div>
                )}
            </div>
        </section>
    );
};
