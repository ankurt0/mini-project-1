import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAETP6zGdijV80CzozMhAQo0y7dhqQO7KM",
  authDomain: "cart-64537.firebaseapp.com",
  databaseURL: "https://cart-64537.firebaseio.com",
  projectId: "cart-64537",
  storageBucket: "cart-64537.appspot.com",
  messagingSenderId: "750227901835",
  appId: "1:750227901835:web:560b3085417d16e800338e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


