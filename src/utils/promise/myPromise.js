/*
 * @Descripttion:手写promise
 * @Author: chelsea.jiang
 * @Date: 2021-03-02 21:12:40
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-03-03 21:42:22
 */

function Promise(executor) {
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onfulfilledCallback = []; // 存放成功的回调
    this.onrejectedCallback = []; // 存放失败的回调
    const self = this;
    function resolve(value) {
        if (self.status === 'pending') {
            self.value = value;
            self.status = 'fulfilled';
            self.onfulfilledCallback.forEach((fn) => fn());
        }
    }
    function reject(reason) {
        if (self.status === 'pending') {
            self.reason = reason;
            self.status = 'rejected';
            self.onrejectedCallback.forEach((fn) => fn());
        }
    }
    // 执行器会立刻执行
    try {
        executor(resolve, reject);
    } catch (err) {
        reject(err);
    }
}
function resolvePromise(promise2, x, resolve, reject) {
    // 对 x 进行判断 如果 x 是一个普通值，直接 resolve 就可以了
    // 如果 x 是一个 promise，采用 x 的状态
    if (promise2 === x) {
        return reject(new TypeError('循环引用'));
    }
    // 这种情况x 可能是 promise
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        let called = false;
        try {
            const { then } = x; // 看当前的 promise 有没有 then 方法，有可能取 then 报错
            if (typeof then === 'function') {
                // 是一个 promise
                then.call(
                    x,
                    (y) => {
                        if (called) return;
                        called = true;
                        // 如果返回的是一个 promise，这个 promise 返回的 resolve 结果可能还是一个 promise，递归解析这个 y 直到常量为止
                        resolvePromise(promise2, y, resolve, reject);
                    },
                    (r) => {
                        if (called) return; // 防止调用失败又调用成功
                        called = true;
                        reject(r);
                    },
                );
            } else {
                resolve(x); // {then:{}} {then: 123}
            }
        } catch (e) {
            if (called) return; // 防止出错后，继续调用成功逻辑
            called = true;
            reject(x);
        }
    } else {
        resolve(x); // x 是普通常量
    }
}
Promise.prototype.then = function (onfulfilled, onrejected) {
    // 值的穿透， 参数的可选
    onfulfilled = typeof onfulfilled === 'function' ? onfulfilled : (val) => val;
    onrejected = typeof onrejected === 'function' ? onrejected : (err) => throw err;
    const self = this;
    // 返回新的 promise，让当前的 then 方法执行后可以继续
    const promise2 = new Promise((resolve, reject) => {
        if (self.status === 'fulfilled') {
            setTimeout(() => {
                try {
                    const x = onfulfilled(self.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        }
        if (self.status === 'rejected') {
            setTimeout(() => {
                try {
                    const x = onrejected(self.reason);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        }

        // 如果是异步，需要把成功和失败分别放到数组里，发布订阅，如果稍后调用了额 resolve，会让函数一次执行，执行的时候会将成功活着而失败的值进行传递
        if (self.status === 'pending') {
            self.onfulfilledCallback.push(() => {
                setTimeout(() => {
                    try {
                        const x = onfulfilled(self.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
            self.onrejectedCallback.push(() => {
                setTimeout(() => {
                    try {
                        const x = onfulfilled(self.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
        }
    });
    return promise2;
};

// sudo npm install promise-aplus-test -g
// promise-aplus-test myPromise.js
Promise.deferred = function () {
    const dfd = {};
    dfd.promise = new Promise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
};
