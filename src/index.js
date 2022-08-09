import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './AppJokes';
import "./styleJoke.scss"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);