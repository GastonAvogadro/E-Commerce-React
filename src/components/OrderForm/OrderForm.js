import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCartContext } from '../../context/CartContext';
import './OrderForm.css';

export const OrderForm = ({ setOrderId, setFormSent }) => {
    const { cartList, emptyCart, cartTotalPrice } = useCartContext();

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
            .then((resp) => setOrderId(resp.id))
            .catch((err) => console.log(err))
            .finally(emptyCart());
    };

    return (
        <Formik
            initialValues={{
                name: '',
                phone: '',
                email: '',
                emailConfirm: '',
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

                if (values.emailConfirm !== values.email) {
                    errors.emailConfirm = 'Por favor ingrese correctamente su email';
                }

                return errors;
            }}
            onSubmit={({ name, phone, email }, { resetForm }) => {
                createOrder(name, phone, email);
                resetForm();
                setFormSent(true);
                // setTimeout(() => setFormSent(false), 5000);
            }}
        >
            {({ errors }) => (
                <Form className="orderForm" id='orderForm'>
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <Field type="text" id="name" name="name" placeholder="nombre y apellido" />
                        <ErrorMessage name="name" component={() => <div className="error">{errors.name}</div>} />
                    </div>
                    <div>
                        <label htmlFor="phone">Telefono</label>
                        <Field type="text" id="phone" name="phone" placeholder="teléfono   " />
                        <ErrorMessage name="phone" component={() => <div className="error">{errors.phone}</div>} />
                    </div>
                    <div>
                        <label htmlFor="email">Correo</label>
                        <Field type="text" id="email" name="email" placeholder="correo@correo.com" />
                        <ErrorMessage name="email" component={() => <div className="error">{errors.email}</div>} />
                    </div>
                    <div>
                        <label htmlFor="emailConfirm">Confirmación de correo</label>
                        <Field type="text" id="emailConfirm" name="emailConfirm" placeholder="correo@correo.com" />
                        <ErrorMessage
                            name="emailConfirm"
                            component={() => <div className="error">{errors.emailConfirm}</div>}
                        />
                    </div>

                    <button type="submit">Enviar</button>
                </Form>
            )}
        </Formik>
    );
};
