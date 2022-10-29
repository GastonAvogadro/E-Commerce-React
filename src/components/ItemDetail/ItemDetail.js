import { useCartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';

export const ItemDetail = ({ product }) => {
    const { addItem } = useCartContext();
    const onAdd = (quantity) => {
        addItem({ ...product, quantity }, quantity);
    };

    return (
        <div className="card mb-3" id='itemDetail'>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={product.image} className="img-fluid rounded-start" alt={product.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">Precio $ {product.price}</p>
                    </div>
                    <ItemCount stock={product.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    );
};
