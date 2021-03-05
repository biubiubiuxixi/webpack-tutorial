/*
 * @Descripttion: action 函数
 * @Author: chelsea.jiang
 * @Date: 2021-03-05 10:50:35
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-03-05 16:35:43
 */
import { SET_LOG_USER, SET_LOGOUT } from './actionTypes';

// 用户登录，存储用户信息
export const loginUserTodo = (userData) => ({
    type: SET_LOG_USER,
    state: userData,
});

export const loginOutTodo = () => ({
    type: SET_LOGOUT,
    state: null,
});
