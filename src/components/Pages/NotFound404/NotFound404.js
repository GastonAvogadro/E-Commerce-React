import { Link } from 'react-router-dom';
import { BackgroundImg } from '../../BackgroundImg/BackgroundImg';
import './NotFound404.css'

export const NotFound404 = () => {
    return (
        <section className="container">
            <BackgroundImg />
            <div className='NotFound404'>
                <h3>404 not found</h3>
                <p>La ruta ingresada no es válida</p>
                <Link to="/">
                    <button>Volver al inicio</button>
                </Link>
            </div>
        </section>
    );
};
