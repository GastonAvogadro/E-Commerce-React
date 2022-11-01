import { Link } from 'react-router-dom';
import './Menu.css';

export const Menu = ({isOpen, handleOpen}) => {

    return (
        <>
            <div onClick={handleOpen} className="bar">
                <span className={`top ${isOpen ? 'topChecked' : ''}`}></span>
                <span className={`middle ${isOpen ? 'middleChecked' : ''}`}></span>
                <span className={`bottom ${isOpen ? 'bottomChecked' : ''}`}></span>
            </div>

            <ul className={`menu ${isOpen ? 'open' : ''}`}>
                <li>
                    <Link to="/category/camperas" onClick={handleOpen}>
                        CAMPERAS
                    </Link>
                </li>
                <li>
                    <Link to="/category/zapatos" onClick={handleOpen}>
                        ZAPATOS
                    </Link>
                </li>
                <li>
                    <Link to="/category/cintos" onClick={handleOpen}>
                        CINTOS
                    </Link>
                </li>
                <li>
                    <Link to="/category/billeteras" onClick={handleOpen}>
                        BILLETERAS
                    </Link>
                </li>
            </ul>
        </>
    );
};
