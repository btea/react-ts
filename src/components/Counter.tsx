// 之前的写法
// import React from 'react' 

// ts中写法
import * as React from 'react';

// 引入connect，让组件和仓库建立连接
import {connect} from 'react-redux';
// 引入actions，用于传个connect
import actions from '../store/actions/counter'
// 引入约束接口
import {Store} from '../types';

// 接口约束
interface IProps{
    number: number,
    add: any,
    subtract: any
    // add 和 subtract都是函数
}

class CounterComponent extends React.Component<IProps>{
    render(){
        // 利用解构赋值取出
        // 这里比如和IProps保持一致，不对应则会报错，因为接口约束了必须这样
        let {number, add, subtract} = this.props;
        return (
            <div>
                <p>{number}</p>
                <button onClick={add}>+</button>
                <button onClick={subtract}>-</button>
            </div>
        )
    }
}
// 这个connect需要执行两次，第二次需要我们把这个组件CounterComponent放进去
// connect第一次执行，需要两个参数，
// 需要传给connect的函数
let mapStateToProps = function(state: Store){
    return state;
};

export default connect(mapStateToProps,actions)(CounterComponent);