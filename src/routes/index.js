/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-01-28 15:24:23
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-01-28 20:53:54
 */
import { lazy } from 'react';

const About = lazy(() => import('@/pages/About'));
const Users = lazy(() => import('@/pages/Users'));
const Home = lazy(() => import('@/pages/Home'));
const Login = lazy(() => import('@/pages/Login'));

const Topic = lazy(() => import('@/pages/Topics/Topic'));
const Topics = lazy(() => import('@/pages/Topics'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const routes = [
    {
        path: '/',
        exact: true,
        Component: Home,
    },
    {
        path: '/login',
        Component: Login,
    },
    {
        path: '/about',
        Component: About,
        requireAuth: true,
    },
    {
        path: '/users',
        Component: Users,
        requireAuth: true,
    },
    {
        path: '/topics/:id',
        Component: Topic,
        requireAuth: true,
    },
    {
        path: '/topics',
        Component: Topics,
        requireAuth: true,
    },
    {
        path: '*',
        Component: NotFound,
    },
];

export default routes;
