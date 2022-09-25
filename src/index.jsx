import React from 'react';
import * as ReactDOM from 'react-dom/client';
import StateApi from './state-api'
import App from "./components/app";


// https://jscomplete.com/learn/1rd-reactful
// $ npm run dev:server
// $ npm run dev:bundler
//

console.log(window.initialData);
const store = new StateApi(window.initialData);

// ReactDOM.render(
//   <App store={store} />,
//   document.getElementById('root')
// );
const container = document.getElementById("app");
ReactDOM.hydrateRoot(container, <App store={store} />);