import { useLocation, useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import './BackgroundImg.css'

export const BackgroundImg = () => {
    const { idCategory } = useParams();
    const location = useLocation()
    const { cartList } = useCartContext();
    let url;

    if (idCategory === 'camperas') {
        url = 'https://i.ibb.co/3yp5VFc/jackets.jpg';
    }
    else if (idCategory === 'zapatos') {
        url = 'https://i.ibb.co/x8FTQzY/shoes.jpg';
    }
    else if (idCategory === 'cintos') {
        url = 'https://i.ibb.co/6ts6H79/belts.jpg';
    }
    else if (idCategory === 'billeteras') {
        url = 'https://i.ibb.co/dQkBRhw/wallet.jpg';
    }
    else if (location.pathname === '/cart') {
        url = (cartList.length === 0 ? 'https://i.ibb.co/sQJXR8p/cat-empty.jpg' : 'https://i.ibb.co/kyzxJDB/suitcase-closed.jpg');
    }
    else if (location.pathname === '/' || location.pathname === '/NotFound404') {
        url = 'https://i.ibb.co/yR2d0BH/nature-boots.jpg';
    }
    return (
        <div className="backgroundImg">
            <img src={url} alt='background img'></img>
        </div>
    );
};
