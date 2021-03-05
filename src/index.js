/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-01-12 14:22:29
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-03-05 14:37:33
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './pages/App';
import store from './redux/store';

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
module.hot.accept();
