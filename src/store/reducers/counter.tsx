// 导入类型校验的接口  
// 用来约束state
import { Counter } from '../../types'
// 导入action的接口
import { Action } from '../actions/counter'
// 引入action动作行为的常量
import * as types from '../action-types'

import history from '../../history'
// 给number赋予默认值
let initState:Counter = {number: 0};
// 接口写在state：Store
export default function(state: Counter = initState, action: Action){
    // 拿到老的状态state和新的状态action
    // action是一个动作行为，而这个动作行为，在计数器中具备 加 或 减两个功能
    // 判断action的行为类型
    switch(action.type){
        case types.ADD:
            // 当action的行为是ADD的时候，给number加1
            return {number: state.number + 1};
            break;
        case types.SUBTRACT:
            // 当action的行为是SUBTRACT的时候，给number减1
            return {number: state.number - 1}
            break;
        case types.GOTO:
            return state;
            break;
        default:
            // 当没有匹配到则返回原本的state
            return state;
            break;
            
    }
}