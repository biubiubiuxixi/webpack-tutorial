/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-03-05 14:40:49
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-03-15 16:48:57
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, useHistory } from 'react-router-dom';

const Login = (props) => {
    const { loginIn, auth } = props;
    const history = useHistory();
    const { from } = history.location.state || { from: { pathname: '/' } };
    const loginClick = () => {
        loginIn('我登录了， 我是希希');
    };
    if (auth === true) {
        return <Redirect to={from} />;
    }

    return (
        <button type="button" onClick={loginClick}>
            登录
        </button>
    );
};

Login.propTypes = {
    loginIn: PropTypes.func.isRequired,
    auth: PropTypes.bool.isRequired,
};

export default Login;
