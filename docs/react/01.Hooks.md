---
title: React Hooks
date: 2021-04-22 20:35:01
permalink: /pages/df15c4/
categories:
  - react
tags:
  - react
  - hooks
---
# React Hooks

简介：
> React Hooks 是16.8版本新增得特性，可以让你在不编写class组件使用state和React其他特性

## Hooks和传统class组件区别

```js
// 1.class 组件
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count:0
        }
    }
    handleClick = () => {
        this.setState({
            count:this.state.count++
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.count}</button>
            </div>
        )
    }
}

// 2. hooks改写
function App() {
    // 定义状态
    const [count, setcount] = useState(0)

    return (
        <div>
            this is {count} 
            <div><button onClick={() => setcount(count+1)}>click me</button></div>
        </div>
    )
}
```

## 为什么react增加hooks

- 复用组件麻烦
- this问题
- 生命周期混乱

## 什么是 State Hooks

- <font color=#FF0000>useState</font> 是react Hooks自带的函数接受参数作为初始值，返回数组对象，数组包含俩项，第一项是我们设置的变量，后边的是改变变量的方法，<font color=#FF0000>useState 不会把新的 state 和旧的 state 进行合并，而是直接替换</font>

- 初始state
    > 如果初次获取state比较复杂可以传入一个函数计算，该函数只在初次渲染时执行

    ```js
    function getInitState(){
        return 2*3;
    }
    // 定义状态
    const [count, setcount] = useState(getInitState)
    ```

- 读取状态值

```js
<div>
    this is {count} 
</div>
```

- 更新状态

```js
  <button onClick={() => setCount(count + 1)}>
    Click me
  </button>
```

点击btn 执行setCount方法出入参数值，就会改变声明的count值

- 问题

    > 为什么每次点击count都会在新值+1 而不是初始值+1

- 假如需要多个状态值怎么办

```js
    const [msg, setMsg] = useState('')
    const [ary, setAry] = useState([1,2,3])
    const [obj, setObj] = useState({a:3,b:3})
```

- react 怎么保证每个useState相互独立的

> 解析是按照useState的声明顺序来处理的

```js
// 1.
let flag = true

const [a,setA] = useState('a');

if (flag) {
    const [b,setB] = useState('b');
}

const [c,setC] = useState('c')

// 这么声明直接报错

```

<font color=#ff0000>所以不能在ifelse里声明useState，导致Hooks 执行顺序不一致</font>

## 什么是Effect Hooks？

```js
// 相当于componentDidMount和componentDidUpdate
useEffect(() =>{
    console.log(1);
    document.title = `你点击了count按钮${count}下`
})
```

如果没有effect Hooks 怎么写

```js
componentDidMount () {
    document.title = `你点击了count按钮${count}下`
}
componentDidUpdate () {
    document.title = `你点击了count按钮${count}下`
}
```

### useEffect 做了什么？

> 我们声明了一个副作用方法，改方法在初次页面渲染时执行一次，每次页面更新时也会执行一次。并且useEffect 不会阻止浏览器更新视图因为传入的匿名函数是异步执行的，而componentDidMount和componentDidUpdate是同步的会阻止浏览器更新视图

### useEffect 怎么解绑副作用函数

```js
useEffect(() =>{
    let timer = setTimeout(() =>{
            console.log('22222222');
        })
    document.title = `你点击了count按钮${count}下`
    return function clearTimer() {
        timer = null
    }
})
```

> 通过返回一个函数的方式解绑副作用，Hooks会在下一次重新渲染时执行返回函数

### 怎么避免useEffect重复执行

```js
useEffect(() =>{
    document.title = `你点击了count按钮${count}下`
},[count])
```

> useEffect第二个参数传入一个数组，这样传的意义是，只有在count值发生变化时才会重新执行

## useReducer

> useReducer 和redux的reducer想象例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等，可以使用useReducer,接受三个参数，1.reducer，2.初始值，3.初始值回调函数接收2参数，返回一个state

```js
import React ,{useReducer} from 'react';

let initNum = 0;

function reducer(state,action) {
    switch (action){
        case 'ADD':
            return {number: state.number + 1}
        case 'DELETE':
            return {number: state.number - 1}
        default:
            throw new Error('error')
    }
}

function init(initState) {
    return {number:initState}
}

export default function Counter3() {
    const [state,dispatch] = useReducer(reducer,initNum,init)

    return (
        <div>
            {state.number}
            <button onClick={()=>dispatch('ADD')}>++</button>
            <button onClick={()=>dispatch('DELETE')}>--</button>
        </div>
    )
}
```

## useLayoutEffect

> 简介：useLayoutEffect和useEffect得区别是，useLayoutEffect会在页面layout后painting前调用，useEffect在页面更新结束执行。

```js
import React ,{useLayoutEffect,useEffect,useState}from 'react';

export default function Counter4(){
    const [color,setColor] = useState('aaccbb')
    useLayoutEffect(()=>{
        alert('aaa')
    })
    useEffect(()=>{
        console.log('color')
    })
    return (
        <>
            <div>{color}</div>
            <button onClick={()=>setColor('ccddee')}>++</button>
        </>
    )
}
```
