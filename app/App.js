/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-01-25 16:12:01
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-01-26 20:24:25
 */
import React from 'react';
import Hello from './Hello';

const App = () => {
    const a = '111';
    return (
        <div>
            这 app
            {a}
            <Hello />
            {[1, 2, 3].map((item) => (
                <div key={item}>{item}</div>
            ))}
        </div>
    );
};

export default App;
