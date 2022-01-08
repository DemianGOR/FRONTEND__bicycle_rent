import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from "./js/Header";
import Main from "./js/Main";
import TopHeader from "./js/TopHeader";
import SearchBar from "./js/SearchBar";



ReactDOM.render(
  <React.StrictMode>
      <Header/>

      <TopHeader/>
      <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
