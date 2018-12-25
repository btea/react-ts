import {Store} from '../../types'
import {Action} from '../actions/counter'
import * as types from '../action-types'


let initState:Store = {number: 0};

export default function(state: Store = initState, action: Action){
    // 拿到老的状态state和新的状态action
    // action是一个动作行为，而这个动作行为，在计数器中具备 加 或 减两个功能
    // 判断action的行为类型
    switch(action.type){
        case types.ADD:
            // 当action的行为是ADD的时候，给number加1
            return {state: state.number + 1};
            break;
        case types.SUBTRACT:
            // 当action的行为是SUBTRACT的时候，给number减1
            return {state: state.number - 1}
            break;
        default:
            // 当没有匹配到则返回原本的state
            return state;
            break;
            
    }
}