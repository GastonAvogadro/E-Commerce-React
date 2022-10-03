import { useState } from 'react';

export const ItemCount = (props) => {
    const [number, setNumber] = useState(1);

    return (
        <div className="itemCount">
            <p>Cantidad {number}</p>
            <button onClick={number > 1 ? () => setNumber(number - 1) : undefined}>-</button>
            <button onClick={number < props.stock ? () => setNumber(number + 1) : undefined}>+</button>
        </div>
    );
};
