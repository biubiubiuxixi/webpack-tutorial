/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-01-25 16:12:01
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-01-28 20:55:46
 */
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import renderRoutes from '@/components/AuthorizeRoute/renderRoutes';
import routes from '@/routes';

const authed = false; // 如果登陆之后可以利用redux修改该值 false 未登录
const authPath = '/login'; // 默认未登录的时候返回的页面，可以自行设置

const App = () => (
    <Router>
        <ul>
            <ol>
                <Link to="/">Home</Link>
            </ol>
            <ol>
                <Link to="/about">About</Link>
            </ol>
            <ol>
                <Link to="/users">Users</Link>
            </ol>
            <ol>
                <Link to="/topics/one">Topic</Link>
            </ol>
            <ol>
                <Link to="/topics">Topics</Link>
            </ol>
        </ul>
        <Suspense fallback={<div>正在加载。。。</div>}>
            <Switch>{renderRoutes(routes, authed, authPath)}</Switch>
        </Suspense>
    </Router>
);

export default App;
