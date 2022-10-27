import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({ id, title, price, stock, image }) => {
    return (
        <div className="card col-6" style={{ width: '16rem' }}>
            <Link to={`/detail/${id}`}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    {title}
                    <p className="card-text">Precio ${price}</p>
                </div>
            </Link>
        </div>
    );
};
