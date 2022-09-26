import './App.css';
import { NavBar } from './components/NavBar.js';
import { ItemListContainer } from './components/ItemListContainer.js';

function App() {
    return (
        <>
            <header className="navBar">
                <NavBar />
            </header>
            <main className="main">
                <ItemListContainer greeting="Bienvenido/a a RandomExistence! Un lugar con diseños creativos y únicos" />
            </main>
        </>
    );
}

export default App;
