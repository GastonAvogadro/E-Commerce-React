const products = [
    { id: '1', name: 'peeler', price: 8000, stock: 10, category: 'sillas', image: 'https://i.ibb.co/DY0fvTx/peeler.webp' },
    { id: '2', name: 'rise', price: 9000, stock: 8, category: 'sillones', image: 'https://i.ibb.co/ZxFvmyH/rise.jpg' },
    { id: '3', name: 'bow', price: 8500, stock: 5, category: 'camas', image: 'https://i.ibb.co/1qQ2Z2n/bow.jpg' },
];

export const gFetch = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(products);
        }, 0);
    });
};