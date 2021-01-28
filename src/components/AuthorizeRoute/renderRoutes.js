/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-01-28 19:50:30
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-01-28 20:34:14
 */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { get } from 'lodash';

const renderRoutes = (routes, authed, authPath = '/login', extraProps = {}) =>
    routes.map(({ Component, path, ...rest }, index) => (
        <Route
            key={index.toString()}
            path={path}
            {...rest}
            render={(props) => {
                if (!get(rest, 'requireAuth', false) || authed || path === authPath) {
                    return <Component {...props} {...extraProps} />;
                }
                return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />;
            }}
        />
    ));
export default renderRoutes;
