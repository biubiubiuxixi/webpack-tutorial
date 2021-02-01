/*
 * @Descripttion: 切换页面时页面，回到顶部
 * @Author: chelsea.jiang
 * @Date: 2021-01-29 10:56:19
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-01-29 11:09:53
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};
export default ScrollToTop;
