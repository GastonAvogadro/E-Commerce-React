import { NavLink } from 'react-router-dom';
import './Menu.css';

export const Menu = ({ isOpen, handleOpen }) => {
    return (
        <>
            <div onClick={handleOpen} className="bar">
                <span className={`top ${isOpen ? 'topChecked' : ''}`}></span>
                <span className={`middle ${isOpen ? 'middleChecked' : ''}`}></span>
                <span className={`bottom ${isOpen ? 'bottomChecked' : ''}`}></span>
            </div>

            <ul className={`menu ${isOpen && window.innerWidth < 768 ? 'open' : ''}`}>
                <li>
                    <NavLink to="/category/camperas" onClick={handleOpen}>
                        CAMPERAS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category/zapatos" onClick={handleOpen}>
                        ZAPATOS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category/cintos" onClick={handleOpen}>
                        CINTOS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category/billeteras" onClick={handleOpen}>
                        BILLETERAS
                    </NavLink>
                </li>
            </ul>
        </>
    );
};
