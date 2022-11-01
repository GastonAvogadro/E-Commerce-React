import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import { Menu } from '../Menu/Menu';
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

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        if (window.innerWidth <= 768) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <header className="navBar">
            <Brand />
            <Menu isOpen={isOpen} handleOpen={handleOpen} />
            <CartWidget isOpen={isOpen} handleOpen={handleOpen} />
        </header>
    );
};
