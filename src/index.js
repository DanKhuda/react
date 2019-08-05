import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import Layout from "./components/layout";
import Home from "./components/pages/home";
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <Layout>
            <Home/>
        </Layout>
    </Provider>,
    document.getElementById('root')
);