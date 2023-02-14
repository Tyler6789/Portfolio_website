import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const Header = () => {
  return (
    <>
      <h1>Hello There!</h1>
      <p>This is my page.</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

