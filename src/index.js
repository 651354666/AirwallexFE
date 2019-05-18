import "@babel/polyfill";
import React from "react";
import ReactDOM from 'react-dom';
import App from './app';
require('./index.less');

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
