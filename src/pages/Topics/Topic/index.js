/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-01-25 16:12:01
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-01-29 13:53:14
 */
import React from 'react';
import { useParams } from 'react-router-dom';

const Topic = () => {
    const { id } = useParams();
    return (
        <div>
            <span>我的 topicId: {id}</span>
        </div>
    );
};

export default Topic;
