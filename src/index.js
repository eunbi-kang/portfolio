import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppProfile from './AppProfile';
import AppCounter from './AppCounter';
import AppProducts from './AppProducts';
import reportWebVitals from './reportWebVitals';

/* 
 *  Git 배포 -> $ npm run deploy 입력
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProducts />
    {/* <AppCounter />
    <AppProfile /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
