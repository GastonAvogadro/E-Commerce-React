import { createContext, useContext, useState } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const isInCart = (id) => cartList.find((product) => (product.id === id ? true : false));

    const addItem = (product, quantity) => {
        if (isInCart(product.id)) {
            setCartList(
                cartList.map((item) => {
                    return item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item;
                })
            );
        } else {
            setCartList([...cartList, product]);
        }
    };

    const itemsInCart = () => {
        return cartList.reduce((prev, act) => prev + act.quantity, 0);
    };

    const cartTotalPrice = () => {
        return cartList.reduce((prev, act) => prev + act.quantity * act.price, 0);
    };

    const removeItem = (id) =>
        setCartList(
            cartList.filter((product) => {
                return product.id !== id && product;
            })
        );

    const emptyCart = () => {
        setCartList([]);
    };

    return (
        <CartContext.Provider value={{ cartList, addItem, cartTotalPrice, itemsInCart, removeItem, emptyCart }}>
            {children}
        </CartContext.Provider>
    );
};
