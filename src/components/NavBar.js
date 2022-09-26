import { Cart } from './CartWidget';

const Brand = () => {
    return <h1>RandomExistence</h1>;
};

const MenuLinks = () => {
    return (
        <ul className="menu">
            <li>
                <a href="#">Sillas</a>
            </li>
            <li>
                <a href="#">Sillones</a>
            </li>
            <li>
                <a href="#">Camas</a>
            </li>
            <li>
                <a href="#">Escritorios</a>
            </li>
        </ul>
    );
};

export const NavBar = () => {
    return (
        <>
            <div className="brand">
                <Brand />
            </div>
            <div>
                <MenuLinks />
            </div>
            <div className="cartWidget">
                <Cart />
            </div>
        </>
    );
};
