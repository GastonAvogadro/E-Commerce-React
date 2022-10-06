import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/Pages/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/Pages/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <>
            <header className="navBar">
                <NavBar />
            </header>
            <main className="main">
                <ItemListContainer greeting="Bienvenido/a a RandomExistence! Un lugar con diseños creativos y únicos" />
                <ItemDetailContainer />
            </main>
        </>
    );
}

export default App;
