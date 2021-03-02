/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-01-25 16:12:01
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-02-25 09:34:59
 */
import React from 'react';
import { useHistory } from 'react-router-dom';

const Topics = () => {
    const history = useHistory();
    const onClick = (id) => {
        history.push(`/topics/${id}`);
    };

    function update() {
        console.log('更新视图');
    }
    const arr = [1, 2, 3];
    // 数组变化会先改变数组内容如，还会改变数组长度
    const proxy = new Proxy(arr, {
        set(target, key, value) {
            // 不要手动操作原数组，因为数组变化时，可能调用的是 push 的方法，pop 这个时候 key 就会出现问题
            if (key === 'length') return true;
            update();
            return Reflect.set(target, key, value);
        },
        get(target, key) {
            return Reflect.get(target, key);
        },
    });
    proxy.push(1);
    console.log(proxy[0]);

    // 求和
    const sum = arr.reduce((a, b) => a + b);
    console.log(sum);

    const sum2 = [
        0,
        { price: 100, count: 1 },
        { price: 200, count: 2 },
        { price: 300, count: 3 },
    ].reduce((a, b) => a + b.price * b.count);
    console.log(sum2);

    const sum3 = [
        { price: 100, count: 1 },
        { price: 200, count: 2 },
        { price: 300, count: 3 },
    ].reduce((a, b) => a + b.price * b.count, 0);
    console.log(sum3);

    const keys = ['name', 'age'];
    const values = ['Tom', 18]; // 转为 { name: 'Tom', age: 18 }
    // {}代表 a
    const result = keys.reduce((a, b, index) => {
        const memo = a;
        memo[b] = values[index];
        return a;
    }, {});
    console.log(result);

    const sums = (a, b) => a + b;
    const toUpper = (str) => str.toUpperCase();
    const addStr = (str) => `***${str}***`;
    // 实现一个 compose
    const compose = (...fns) => fns.reduce((a, b) => (...args) => a(b(...args)));
    console.log(compose(addStr, toUpper, sums)('ja', 'cd')); // 等同于addStr(toUpper(sum('ja', 'cd')))

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
