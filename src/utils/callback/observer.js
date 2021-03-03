/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-03-02 19:38:20
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-03-02 19:54:03
 */
// 观察者模式 基于发布订阅模式
// 区别：发布订阅：发布和订阅两者无关，观察者模式两者有关，观察者模式：观察者和被观察者
// 被观察者，应该存放着观察者
// 被观察者状态变化 要更新自己身上的所有观察者
class Subject {
    constructor() {
        this.state = '开心';
        this.observerArr = [];
    }

    attach(observer) {
        this.observerArr.push(observer);
    }

    setState(newState) {
        this.state = newState;
        this.observerArr.forEach((observer) => observer.update(newState));
    }
}

class Observer {
    update(newState) {
        console.log(newState);
    }
}

const subject = new Subject();
const observer1 = new Observer('我');
const observer2 = new Observer('媳妇');
subject.attach(observer1);
subject.attach(observer2);
subject.setState('大哭');
