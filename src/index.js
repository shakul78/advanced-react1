import React from 'react';
// import ReactDOM from 'react-dom';
import * as ReactDOM from 'react-dom/client';

import App from "./components/app";


// https://jscomplete.com/learn/1rd-reactful
const container = document.getElementById("app");
ReactDOM.hydrateRoot(container, <App />);