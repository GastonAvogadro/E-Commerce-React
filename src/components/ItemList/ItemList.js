import { Item } from '../Item/Item';
import './ItemList.css';

export const ItemList = ({ listProducts }) => {
    return (
        <section className="itemList row">
                {listProducts.map((product) => (
                    <Item
                        id={product.id}
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        stock={product.stock}
                        image={product.image}
                    />
                ))}
        </section>
    );
};
