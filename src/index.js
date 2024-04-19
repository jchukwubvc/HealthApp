import React from 'react';
import ReactDOM from 'react-dom/client';
import './landingviews/index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import reportWebVitals from './reportWebVitals';
import App from "./App";

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <App/>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
