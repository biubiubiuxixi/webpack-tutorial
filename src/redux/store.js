/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-03-05 14:03:38
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-03-05 17:39:40
 */
import { createStore } from 'redux';
import combineAllReducers from './reducers';

const store = createStore(combineAllReducers);

export default store;
