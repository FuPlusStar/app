import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import setRem from './lib/flexible.ts';
import './main.css';

setRem(); //修改html根标签大小
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
