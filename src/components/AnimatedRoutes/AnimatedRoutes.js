import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ItemListContainer } from '../Pages/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../Pages/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from '../Pages/CartContainer/CartContainer';
import { NotFound404 } from '../Pages/NotFound404/NotFound404';

export const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:idCategory" element={<ItemListContainer />} />
                <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<CartContainer />} />
                <Route path="/NotFound404" element={<NotFound404 />} />
                <Route path="*" element={<Navigate to="/NotFound404" />} />
            </Routes>
        </AnimatePresence>
    );
};
