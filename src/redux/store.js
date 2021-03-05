/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-03-05 14:03:38
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-03-05 14:04:56
 */
import { createStore } from 'redux';
import combineAllReducers from './reducers';

const store = createStore(combineAllReducers);

export default store;
