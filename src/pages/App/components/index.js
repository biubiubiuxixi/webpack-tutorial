/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-01-25 16:12:01
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-03-12 13:48:37
 */
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import renderRoutes from '@/components/AuthorizeRoute/renderRoutes';
import routes from '@/routes';
import ScrollToTop from '@/components/ScrollToTop';
import '../styles/style.scss';

const authPath = '/login'; // 默认未登录的时候返回的页面，可以自行设置

const App = (props) => {
    const { auth, loginOut } = props; // auth： 是否登录
    return (
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
            {auth && (
                <button type="button" onClick={loginOut}>
                    退出登录
                </button>
            )}
            <Suspense fallback={<div>正在加载。。。</div>}>
                <Switch>{renderRoutes(routes, auth, authPath)}</Switch>
            </Suspense>
        </Router>
    );
};
App.propTypes = {
    auth: PropTypes.bool.isRequired,
    loginOut: PropTypes.func.isRequired,
};

export default App;
