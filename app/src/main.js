import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import './style.scss';

import App from './react/App.jsx';

ReactDOM.render(
<BrowserRouter>
    <App/>
</BrowserRouter>,
document.querySelector('#app')
);
