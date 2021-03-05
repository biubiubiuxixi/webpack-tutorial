/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-03-05 11:04:34
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-03-05 17:39:23
 */
import { getAuth, getUserData, setAuth, setUserData } from '@/utils/localStroage';
import { SET_LOG_USER, SET_LOGOUT } from '../actionTypes';

const initState = {
    auth: getAuth(),
    userData: getUserData(),
};

export const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_LOG_USER: {
            setAuth(true);
            setUserData(action.state);
            return { ...state, ...action.state, auth: true };
        }
        case SET_LOGOUT: {
            setAuth(false);
            setUserData(null);
            return { ...state, ...action.state, auth: false };
        }
        default:
            return state;
    }
};
