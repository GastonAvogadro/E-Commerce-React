import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { AnimatedRoutes } from './components/AnimatedRoutes/AnimatedRoutes';
import { CartContextProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <AnimatedRoutes />
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;
