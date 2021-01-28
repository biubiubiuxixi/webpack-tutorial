/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-01-25 16:12:01
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-01-28 11:17:11
 */
import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';

const Topic = () => {
    const { id } = useParams();
    console.log('useRouteMatch', useRouteMatch());
    console.log('useParams', useParams());
    const a = 'Topic';
    return (
        <div>
            这是 {a}
            <span>我的 topicId: {id}</span>
        </div>
    );
};

export default Topic;
