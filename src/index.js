import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import './useReducer/intro-reducer'; // estoy llamando el reducer que cree

import App from './App';
import reportWebVitals from './reportWebVitals';
// import { TodoApp } from './useReducer/TodoApp';
import { MainApp } from './useContext/MainApp';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <App />
    // <TodoApp />
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
