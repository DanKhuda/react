import React from 'react';
import ReactDOM from 'react-dom';
import {syncHistoryWithStore} from 'react-router-redux';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from "react-redux";
import Layout from "./components/layout";
import Home from "./components/pages/home";
import Image from "./components/pages/image";
import store from './redux/store';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Home} />
                <Route path='image/:id' component={Image} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);