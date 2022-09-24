import React from 'react';
import * as ReactDOM from 'react-dom/client';

import App from "./components/app";


// https://jscomplete.com/learn/1rd-reactful
// $ npm run dev:server
// $ npm run dev:bundler
//
const container = document.getElementById("app");
ReactDOM.hydrateRoot(container, <App />);