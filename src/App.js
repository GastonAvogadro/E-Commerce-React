import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/Pages/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/Pages/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './components/Pages/CartContainer/CartContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer greeting="Bienvenido/a a RandomExistence!" />} />
                <Route path="/category/:idCategory" element={<ItemListContainer greeting="Bienvenido/a a RandomExistence!" />} />
                <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<CartContainer />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
