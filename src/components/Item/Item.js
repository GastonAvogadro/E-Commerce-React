import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({ id, title, price, image }) => {
    return (
        <div className="card" id='itemListCard'>
            <Link to={`/detail/${id}`}>
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <p className="itemTitle card-text">{title}</p>
                    <p className="itemPrice card-text">$ {price}</p>
                </div>
            </Link>
        </div>
    );
};
