/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-03-02 20:04:06
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-03-02 21:31:00
 */
// Promise 是一个类 承诺 允诺 异步解决方案
// pending 等待状态 -》 resolved 成功态
// pending 等待状态 -》 rejected 失败态
// 成功态和失败态不能相互转换

// executor函数 会立即执行，参数时 resolve 函数和 reject 函数
const promise = new Promise((resolve, reject) => {
    // executor
    // console.log(1);
    const time = setTimeout(() => {
        resolve('玩具多1');
        clearTimeout(time);
    }, 2000);
    // reject('玩具少');
});

// onfulfilled, onrejected

promise
    .then(
        (val) => {
            console.log(val, 'success1');
        },
        (err) => {
            console.log(err, 'fail1');
        },
    )
    .then((val) => {
        console.log(val, 'success2');
        return 1;
    })
    .then(
        (val) => {
            console.log(val, 'success3');
            // throw new Error('错误 3');
        },
        (err) => {
            console.log(err, 'fail3');
            return undefined;
        },
    )
    .then(
        (val) => {
            console.log(val, 'success4');
        },
        (err) => {
            console.log(err, 'fail4');
        },
    );
