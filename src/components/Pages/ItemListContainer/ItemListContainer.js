import { ItemList } from '../../ItemList/ItemList';
import './ItemListContainer.css';

export const ItemListContainer = (props) => {
    return (
        <section>
            <h2 className="greeting">{props.greeting}</h2>
            <ItemList />
        </section>
    );
};
