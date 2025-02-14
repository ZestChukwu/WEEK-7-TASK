import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UpdateCounter from './Counter';
import EmojiCounter from './EmojiCounter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < UpdateCounter />
    <EmojiCounter pic='sad' />
    <EmojiCounter pic='like' />
    <EmojiCounter pic='happy' />
    <EmojiCounter pic='Love' />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
