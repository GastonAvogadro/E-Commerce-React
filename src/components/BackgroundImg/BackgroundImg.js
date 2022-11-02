import { useLocation, useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import './BackgroundImg.css'

export const BackgroundImg = () => {
    const { idCategory } = useParams();
    const location = useLocation()
    const { cartList } = useCartContext();
    let url;

    if (idCategory === 'camperas') {
        url = 'https://i.ibb.co/4sNcYBL/jackets.jpg';
    }
    else if (idCategory === 'zapatos') {
        url = 'https://i.ibb.co/pv3KRjL/shoes.jpg';
    }
    else if (idCategory === 'cintos') {
        url = 'https://i.ibb.co/vHJV3H7/belts.jpg';
    }
    else if (idCategory === 'billeteras') {
        url = 'https://i.ibb.co/t43425x/wallets.jpg';
    }
    else if (location.pathname === '/cart') {
        url = (cartList.length === 0 ? 'https://i.ibb.co/pf8Bb8R/cat-empty.jpg' : 'https://i.ibb.co/kmbCYfM/trunk.jpg');
    }
    else if (location.pathname === '/' || location.pathname === '/NotFound404') {
        url = 'https://i.ibb.co/PCjcbQW/nature-boots.jpg';
    }
    return (
        <div className="backgroundImg">
            <img src={url} alt='background img'></img>
        </div>
    );
};
