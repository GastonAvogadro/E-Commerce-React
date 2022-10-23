import { Item } from '../Item/Item';
import './ItemList.css';

export const ItemList = ({ listProducts }) => {
    
    return (
        <section className="itemList container">
            {listProducts.map((product) => (
                <Item
                    id={product.id}
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    stock={product.stock}
                    image={product.image}
                />
            ))}
        </section>
    );
};
