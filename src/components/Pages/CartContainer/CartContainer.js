import { Link } from 'react-router-dom';
import { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { BackgroundImg } from '../../BackgroundImg/BackgroundImg';
import { useCartContext } from '../../../context/CartContext';
import './CartContainer.css';

export const CartContainer = () => {
    const { cartList, emptyCart, removeItem, cartTotalPrice } = useCartContext();
    const [formSent, setFormSent] = useState(false);

    const createOrder = (name, phone, email) => {
        const order = {
            buyer: {
                name: name,
                phone: phone,
                email: email,
            },
            items: cartList.map((prod) => {
                const { id, title, price, quantity } = prod;
                return { id, title, price, quantity };
            }),
            total: cartTotalPrice(),
        };

        const db = getFirestore();
        const orders = collection(db, 'orders');
        addDoc(orders, order)
            .then((resp) => console.log(resp))
            .catch((err) => console.log(err))
            .finally(emptyCart());
    };

    return (
        <section className="container">
            <div>
                <BackgroundImg />
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
                        <>
                            <Formik
                                initialValues={{
                                    name: '',
                                    phone: '',
                                    email: '',
                                }}
                                validate={(values) => {
                                    let errors = {};

                                    if (!values.name) {
                                        errors.name = 'Por favor ingrese su nombre';
                                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                                        errors.name = 'El nombre solo puede contener letras y espacios';
                                    }

                                    if (!values.phone) {
                                        errors.phone = 'Por favor ingrese su telefono';
                                    } else if (isNaN(values.phone)) {
                                        errors.phone = 'El telefono solo puede contener numeros';
                                    }

                                    if (!values.email) {
                                        errors.email = 'Por favor ingrese su correo electronico';
                                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                                        errors.email = 'El correo no es valido';
                                    }

                                    return errors;
                                }}
                                onSubmit={({ name, phone, email }, { resetForm }) => {
                                    createOrder(name, phone, email);
                                    resetForm();
                                    setFormSent(true);
                                    setTimeout(() => setFormSent(false), 5000);
                                }}
                            >
                                {({ errors }) => (
                                    <Form className="formulario">
                                        <div>
                                            <label htmlFor="name">Nombre</label>
                                            <Field type="text" id="name" name="name" placeholder="John Doe" />
                                            <ErrorMessage
                                                name="name"
                                                component={() => <div className="error">{errors.name}</div>}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone">Telefono</label>
                                            <Field type="text" id="phone" name="phone" placeholder="John Doe" />
                                            <ErrorMessage
                                                name="phone"
                                                component={() => <div className="error">{errors.phone}</div>}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email">Correo</label>
                                            <Field
                                                type="text"
                                                id="email"
                                                name="email"
                                                placeholder="correo@correo.com"
                                            />
                                            <ErrorMessage
                                                name="email"
                                                component={() => <div className="error">{errors.email}</div>}
                                            />
                                        </div>

                                        <button type="submit">Enviar</button>
                                        {formSent && <p className="exito">Formulario enviado con exito!</p>}
                                    </Form>
                                )}
                            </Formik>
                        </>
                    </>
                )}
            </div>
        </section>
    );
};
