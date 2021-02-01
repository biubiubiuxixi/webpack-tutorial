/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-01-25 16:12:01
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-01-29 13:52:02
 */
import React from 'react';
import { useHistory } from 'react-router-dom';

const Topics = () => {
    const history = useHistory();
    const onClick = (id) => {
        history.push(`/topics/${id}`);
    };
    return (
        <ul>
            <li>
                <button type="button" onClick={() => onClick('one')}>
                    one topic
                </button>
            </li>
            <li>
                <button type="button" onClick={() => onClick('two')}>
                    two topic
                </button>
            </li>
        </ul>
    );
};

export default Topics;
