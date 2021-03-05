/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-01-25 16:12:01
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-03-05 15:01:03
 */
import { connect } from 'react-redux';
import { loginUserTodo } from '@/redux/actions';
import App from './components';

const mapStateToProps = (state) => ({
    auth: state.loginReducer.auth,
});

const mapDispatchToProps = (dispatch) => ({
    loginIn: (data) => {
        dispatch(loginUserTodo(data));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
