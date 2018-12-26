import * as React from 'react';
import * as ReactDom from 'react-dom';
// 引入redux这个库的Provider组件
import {Provider} from 'react-redux'
// 引入仓库
import store from './store'

import CounterComponent from './components/Counter';
import CounterComponent1 from './components/Counter2';

// 用Provider包裹CounterComponent组件
// 并且把store传给Provider
// 这样Provider可以向它的子组件提供store

ReactDom.render((
    <Provider store={store}>
        <CounterComponent />
        <br/>
        <CounterComponent1 />   
    </Provider>
), document.getElementById('app'))