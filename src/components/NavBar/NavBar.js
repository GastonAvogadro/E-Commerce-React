import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';

const Brand = () => {
    return <Link to="/">RandomExistence</Link>;
};

const MenuLinks = () => {
    return (
        <ul className="menu">
            <li>
                <Link to="/category/sillas">Sillas</Link>
            </li>
            <li>
                <Link to="/category/sillones">Sillones</Link>
            </li>
            <li>
                <Link to="/category/camas">Camas</Link>
            </li>
        </ul>
    );
};

export const NavBar = () => {
    return (
        <header className="navBar">
            <div className="brand">
                <Brand />
            </div>

            <MenuLinks />

            <div className="cartWidget">
                <CartWidget />
            </div>
        </header>
    );
};
