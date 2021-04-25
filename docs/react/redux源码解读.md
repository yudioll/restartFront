---
title: redux源码解读
date: 2021-04-25 20:51:54
permalink: /pages/0cad4e/
categories:
  - react
tags:
  - redux
  - react
  - 基础巩固
---

# Redux 源码解析

> Redux 是一个区中心化得状态管理库，保证了数据的一致性

## 为什么用redux

> 它可以帮助我们对状态的改变进行监听，并且可以在任意地方拿到状态，也可以在任意地方对状态进行修改，解决了逐级传递的问题

## Redux核心概念

- store 保存状态数据
- reducer 定义store中state形式和修改state规则，reducer接收旧得state和action 返回新的state
- dispatch 触发action 中对应的reducer 修改state的值

## 手写简易版redux

```js
/**
 * 手写简易版redux
 * @author yudioll
 */

function createStore(reducer, initState, echancer) {

    // 初始state
    let currentState = initState

    // 当前reduce
    let currentReducer = reducer

    // 当前监听数组
    let currentListens = []

    // 下一次监听数组
    let nextListens = []

    // 返回state方法
    function getState() {
        return currentState
    }

    // 实现订阅方法,返回取消订阅方法
    function subscribe(listener) {

        // 加入下一次监听数组
        nextListens.push(listener)

        // 设置标志位
        let flag = true

        return function unsubscribe() {
            // 如果已经取消了，直接返回
            if(!flag) {
                return
            }

            flag = false
            // 从监听函数中移除
            const index = nextListens.indexOf(listener)
            nextListens.splice(index,1)
        }
    }

    // 实现dispatch方法
    function dispatch(action) {
        // 执行reducer 返回新的state
        currentState = currentReducer(currentState,action)

        // 更新当前监听数组
        currentListens = nextListens
        // 执行所有监听函数

        for (let i = 0; i < currentListens.length; i++) {
            const element = currentListens[i];
            element()
        }
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}
```

## combineReducers

> reducer的功能是接收state和action返回新的state，也就是说reducer负责状态的管理和更新，如果我们页面又多个模块，假如使用一个reducer来管理，那么这个reducer 就会边得复杂而且难以维护，所以我们分模块来写reducer，最后做一个整合所有reducer，这样逻辑就比较清晰了

- 实现combineReducers

```js
function combinReducer(reducers) {
    // 拿到所有reducer key默认为reducers的方法名
    const recucerKeys = Object.keys(reducers);
    const finalReducer = {};

    for (let i = 0; i < recucerKeys.length; i++){
        const key = recucerKeys[i];
        if(typeof reducers[key] !== 'function') {
            throw new Error('err')
        } else {
            finalReducer[key] = reducers[key]
        }
    }

    //这里还有一个判断逻辑 看是否做种的reducer都会返回值

    // 返回一个方法combination
    return function combination(state={},action) {
        let nextState = {}
        let hasChange = false

        const finalKeys = Object.keys(finalReducer)

        for (let i = 0; i < finalKeys.length; i++) {
            const key = finalKeys[i];
            const reducer = finalReducer[key]
            // 这一步是原理是 store中的state存储形式是每个renducer的方法名是state中
            // 的一个key，所以state[key] 就是当前reducer的state
            // 代码看下个
            const previousStateKey = state[key]
            // 执行renducer产生的新state
            const nextStateKey = reducer(previousStateKey,action)
            // 保存在新state
            nextState[key] = nextStateKey
            hasChange = hasChange || nextStateKey !== previousStateKey
        }
        return hasChanged ? nextState : state
    }

}
```

详解combinReducer的 const previousStateKey = state[key]

```js
// 1.创建reducer1
const defaultState = {
    count:0
}
const reducer1 =  (state = defaultState, actions) => {
    switch (actions.type) {
        case 'ADD':
            return {
                count:state.count+1
            }
        default:
            return state
    }
}
export default reducer1

// 2.创建reducer2
const defaultState = {
    number:1
}
const reducer2 =  (state = defaultState, actions) => {
    switch (actions.type) {
        case 'ADD':
            return {
                count:state.number+1
            }
        default:
            return state
    }
}
export default reducer2

// 3.创建index文件中创建store
import {createStore,combineReducers} from 'redux'
// 引入俩个reducer
import reducer1 from './reducer'
import reducer2 from './reducer2'
// 合并reducer
const allreducers = combineReducers({reducer1,reducer2})
// 生成store
const store = createStore(allreducers)
// 打印store中的state
console.log('store: ', store.getState());
// 打印结果如下，这回就明白了为什么使用 state[key] 就拿到每一个reducer的state了，因为在createStore中进行了合并

// store:  {
//     reducer1: {count: 0}
//     reducer2: {number: 1}
// }
export default store
```

## 为什么需要中间件

> 在redux的设计思想里reducer应该是一个纯函数，而我们在触发更新state的时候想要处理一些其他的逻辑，这样就没法使用了，所以增加中间件来处理一些其他的逻辑，先梳理一下正常的更新store的逻辑

正常的更新store的逻辑

1. 调用dispatch，触发某一个action
2. reducer接受action，并根据action的type处理state，返回新的state
3. 更新store

中间件的处理流程

1. dispatch一个action
2. 这个action先被中间件处理
3. 处理完后到下一个中间件处理
4. 最后一个中间件处理完后，dispatch一个符合reducer的action
5. reducer接收action 处理state
6. 更新store

所以redux将2-4进行封装为一个整体，在触发action时，先交给中间件处理，处理完成后触发一个新的dispatch

这里就要用到<font color=#ff0000>createStore</font>的第三个参数<font color=#ff0000>echancer</font>

*下一章详解react中间件继续...*
