/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-03-05 11:05:42
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-03-05 17:30:22
 */
// 获取是否登录
export const getAuth = () => localStorage.getItem('auth') === 'true';

// 设置是否登录
export const setAuth = (auth) => {
    localStorage.setItem('auth', auth);
};

// 获取用户信息
export const getUserData = () => localStorage.getItem('userData');

// 设置是否登录
export const setUserData = (userData) => {
    localStorage.setItem('userData', userData);
};
