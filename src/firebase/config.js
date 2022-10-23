import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyDKHdTrQBPQxvq4ya-9YO_K0comBkIkg1M',

    authDomain: 'randomexistence-da3f9.firebaseapp.com',

    projectId: 'randomexistence-da3f9',

    storageBucket: 'randomexistence-da3f9.appspot.com',

    messagingSenderId: '206790614092',

    appId: '1:206790614092:web:1837249b536fc8a50ca8e9',
};

const app = initializeApp(firebaseConfig);

export const firestoreInit = () => app;
