import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Pulsar } from '@uiball/loaders';
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
            <section>
                <div className="overlay">
                    <div className="modal__locked">
                        {orderId ? (
                            <>
                                <h4>Se ha enviado un correo con su número de orden</h4>
                                <p>Número de orden: {orderId}</p>
                                <button onClick={closeModal}>Aceptar</button>
                            </>
                        ) : (
                            <>
                                <p>Generando orden</p>
                                <div className="d-flex justify-content-center mt-4">
                                    <Pulsar size={100} color="#231F20" />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        );
    };

    return (
        <section className="container">
            <div className="cartContainer">
                {formSent && showModal()}
                <BackgroundImg />

                {cartList.length === 0 ? (
                    <div className="cartEmpty">
                        <div className="col-12 cartCard">
                            <div className="card">
                                <div className="card-body">
                                    <p>No hay productos por acá!</p>
                                    <Link to={'/'}>
                                        <button>Ver productos</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="cartFull row">
                        {cartList.map((product) => (
                            <div className="col-12 cartCard" key={product.id}>
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
                                                <h5 className="card-title">{product.title}</h5>
                                                <p className="card-text">{product.description}</p>
                                                <p>Cantidad: {product.quantity}</p>
                                                <p className="itemPrice">
                                                    Precio = ${product.price * product.quantity}
                                                </p>
                                            </div>
                                            <div className='removeItem'>
                                                <button onClick={() => removeItem(product.id)}>Eliminar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="cleanCart">
                            <button onClick={emptyCart}>Vaciar carrito</button>
                        </div>
                        <div className="totalPrice">
                            <p>Precio total = $ {cartTotalPrice()}</p>
                        </div>
                        <div className="orderFormContainer">
                            <h4>Orden de compra</h4>
                            <OrderForm setOrderId={setOrderId} setFormSent={setFormSent} />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
