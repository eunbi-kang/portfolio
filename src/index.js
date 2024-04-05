import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppProfile from './basic/AppProfile';
import AppCounter from './basic/AppCounter';
import AppProducts from './basic/AppProducts';
// import AppXY from './AppXY';
import reportWebVitals from './reportWebVitals';
import AppmentorsImmer from './advanced/AppmentorsImmer';
import AppForm from './basic/AppForm';
import AppWrap from './advanced/AppWrap';
import AppCard from './advanced/AppCard';
import AppTheme from './advanced/AppTheme';
import AppMentorsButton from './advanced/AppMentorsButton';
// import AppClass from './AppClass';

/* 
 *  Git 배포 -> $ npm run deploy 입력
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppClass /> */}
    <AppProducts />
    <AppMentorsButton />
    <AppTheme />
    <AppCard />
    <AppWrap />
    <AppForm />
    {/* <AppXY /> */}
    <AppmentorsImmer />
    <AppCounter />
    <AppProfile />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
