---
title: redux中间件
date: 2021-04-25 20:53:01
permalink: /pages/76c5c2/
categories:
  - react
tags:
  - redux
  - 中间件
  - 面试
---

# react 中间件

> 简介；在redux中使用中间件其实就是对dispatch方法的重写，来让我们在dispatch传递给reducer之前可以执行我们的一些逻辑包括异步操作等

<br/>

!['流程图'](https://user-gold-cdn.xitu.io/2018/6/15/16402829f54070ae?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

<br/>

## redux applyMiddleware 理解中间件的机制

- 先看一下redux的applyMiddleware使用方式

```js
import {createStore,combineReducers, applyMiddleware} from 'redux'
// 引入俩个reducer
import reducer1 from './reducer'
import reducer2 from './reducer2'
import thunk from 'redux-thunk'
// 合并reducer
const allreducers = combineReducers({reducer1,reducer2})
// 生成store
const store = createStore(allreducers,applyMiddleware(thunk))
// 打印store中的state
console.log('store: ', store.getState());

export default store
```

- redux applyMiddleware的实现

```js
/**
 * redux中的applyMiddleWare实现
 * @param {} middlewares 所有中间件
 */
export default function applyMiddleWare(...middlewares){
    // 传入createStore方法，返回增强版本的createStore
    // 这里就是在createStore中执行的echancer
    // echancer(createStore)(reducer,preloadState)
    /**
     * createStore中的代码- 开始
    */
    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
            throw new Error('Expected the enhancer to be a function.')
        }
        return enhancer(createStore)(reducer, preloadedState)
    }
    /**
     * createStore中的代码- 结束
    */

    // 当前函数中的代码
    return createStore => (...args) =>{ //args 就是reducer
        const store = createStore(...args);
        let dispatch =() => {
            throw new Error('error')
        }

        // 所有中间件的统一参数
        let middlewareApi = {
            getState: store.getState,
            dispatch: (...args) => dispatch(...args)
        }
        // 执行每个middlerware
        const chain = middlewares.map(middleware => middleware(middlewareApi))
        
        dispatch = compose(...chain)(store.dispatch)
        
        return {
            ...store,
            dispatch
        }
    }
}

// 对比redux-thunk一起来看
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }
    return next(action);
  };
}
const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
export default thunk;

// 也就是redux-thunk导出的thunk是这样的

function 匿名函数({dispatch,getState}) {
    return function(next) {
        return function(action){
            if (typeof action === 'function') {
                return action(dispatch, getState, extraArgument);
            }
            return next(action);
        }
    }
}

// 1.对比applyMiddleware来看得出将上边的函数传入执行
// 2. 执行每个middlerware
//  const chain = middlewares.map(middleware => middleware(middlewareApi))
// 此时chain中是这样的,拿redux-thunk举例
[
    function(next) { // next == store.dispatch
        return function(action){
            if (typeof action === 'function') {
                return action(dispatch, getState, extraArgument);
            }
            return next(action);
        }
    }
]
// 3.生成新的dispatch：dispatch = compose(...chain)(store.dispatch)，按照redux-thunk方法执行的话 这个dispatch就是如下
function(action){ //action == getName('user')
    if (typeof action === 'function') {
        // 执行getName方法
        // 转换过来就是
        // getName('user')(dispatch, getState, extraArgument)
        return action(dispatch, getState, extraArgument);
    }
    return next(action);
}

// 4. 使用redux-thunk的dispatch写法
dispatch(getName('user')) // 这个dispatch 就是上边的函数

// 5.redux应用中使用的方式
function getName(id){
    return (dispatch, getState) =>{
        fetch(url,id).then(res=>{
            dispatch({type:"GET",preload:res})
        })
    }
}

dispatch(getName('user'))

```

总结：以上就是redux的中间件applyMiddleware和redux-thunk结合使用中内部的过程，个人认为在redux-thunk中核心的东西应该就是这段代码

```js
function(action){
    if (typeof action === 'function') {
        return action(dispatch, getState, extraArgument);
    }
    return next(action);
}
```

上边这段代码就是讲dispatch改写，如果传入的是函数就执行函数，在函数内部执行中走原有redux的dispatch方法
