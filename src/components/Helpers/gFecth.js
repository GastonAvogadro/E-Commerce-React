const products = [
    { id: '1', name: 'peeler', price: 8000, stock: 10, category: 'sillas', image: './assets/img/peeler.webp' },
    { id: '2', name: 'rise', price: 9000, stock: 8, category: 'sillas', image: './assets/img/rise.jpg' },
    { id: '3', name: 'bow', price: 8500, stock: 5, category: 'sillas', image: './assets/img/bow.jpg' },
];

export const gFetch = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(products);
        }, 2000);
    });
};

export const gFetch2 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(products.filter(product => product.id === '1'));
        }, 2000);
    });
};