/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-01-25 16:12:01
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-01-29 15:58:52
 */
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import renderRoutes from '@/components/AuthorizeRoute/renderRoutes';
import routes from '@/routes';
import ScrollToTop from '@/components/ScrollToTop';
import './styles/style.scss';

const authed = true; // 如果登陆之后可以利用redux修改该值 false 未登录
const authPath = '/login'; // 默认未登录的时候返回的页面，可以自行设置

const App = () => (
    <Router>
        {/* 页面切换时，返回顶部 */}
        <ScrollToTop />
        <ul>
            <ol>
                <NavLink exact to="/" activeClassName="selected">
                    Home
                </NavLink>
            </ol>
            <ol>
                <NavLink to="/about" activeClassName="selected">
                    About
                </NavLink>
            </ol>
            <ol>
                <NavLink to="/users" activeClassName="selected">
                    Users
                </NavLink>
            </ol>
            <ol>
                <NavLink to="/topics/one" activeClassName="selected">
                    Topic
                </NavLink>
            </ol>
            <ol>
                <NavLink to="/topics" activeClassName="selected">
                    Topics
                </NavLink>
            </ol>
        </ul>
        <Suspense fallback={<div>正在加载。。。</div>}>
            <Switch>{renderRoutes(routes, authed, authPath)}</Switch>
        </Suspense>
    </Router>
);

export default App;
