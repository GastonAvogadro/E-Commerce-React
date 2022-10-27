import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';

const Brand = () => {
    return (
        <Link to="/">
            <div className="brand">
                <img
                    src="https://i.ibb.co/XLMPmJj/leather-Life-Icon.png"
                    className="brandLogo"
                    alt="Leather Life"
                ></img>
            </div>
        </Link>
    );
};

const MenuLinks = () => {
    return (
        <ul className="menu">
            <li>
                <Link to="/category/camperas">CAMPERAS</Link>
            </li>
            <li>
                <Link to="/category/zapatos">ZAPATOS</Link>
            </li>
            <li>
                <Link to="/category/cintos">CINTOS</Link>
            </li>
            <li>
                <Link to="/category/billeteras">BILLETERAS</Link>
            </li>
        </ul>
    );
};

export const NavBar = () => {
    return (
        <header className="navBar">
            <Brand />
            <MenuLinks />
            <CartWidget />
        </header>
    );
};
