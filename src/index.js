import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppProfile from './basic/AppProfile';
import AppCounter from './basic/AppCounter';
import AppProducts from './basic/AppProducts';
// import AppXY from './AppXY';
import AppMentor from './AppMentors';
import reportWebVitals from './reportWebVitals';
import AppmentorsImmer from './AppmentorsImmer';

/* 
 *  Git 배포 -> $ npm run deploy 입력
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppmentorsImmer />
    {/* <AppXY /> */}
    <AppProducts />
    <AppCounter />
    <AppProfile />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
