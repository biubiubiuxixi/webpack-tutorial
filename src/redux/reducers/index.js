/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-03-05 11:02:56
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-03-05 13:54:40
 */
import { combineReducers } from 'redux';
import { loginReducer } from './loginReducers';

const combineAllReducers = combineReducers({
    loginReducer,
});

export default combineAllReducers;
