/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-01-25 16:12:01
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-03-05 17:39:16
 */
import { connect } from 'react-redux';
import { loginUserTodo, loginOutTodo } from '@/redux/actions';
import App from './components';

const mapStateToProps = (state) => ({
    auth: state.loginReducer.auth,
});

const mapDispatchToProps = (dispatch) => ({
    loginIn: (data) => {
        dispatch(loginUserTodo(data));
    },
    loginOut: () => {
        dispatch(loginOutTodo());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
