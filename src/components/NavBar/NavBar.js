import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';

const Brand = () => {
    return <Link to="/">LeatherLife</Link>;
};

const MenuLinks = () => {
    return (
        <ul className="menu">
            <li>
                <Link to="/category/camperas">Camperas</Link>
            </li>
            <li>
                <Link to="/category/zapatos">Zapatos</Link>
            </li>
            <li>
                <Link to="/category/cinturones">Cinturones</Link>
            </li>
            <li>
                <Link to="/category/billeteras">Billeteras</Link>
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
