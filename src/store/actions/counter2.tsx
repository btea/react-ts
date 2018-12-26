import * as types from '../action-types'

// 定义两个接口，分别约束add和subtract的type类型
export interface ADD{
    type: typeof types.ADD2
}
export interface SUBTRACT{
    type: typeof types.SUBTRACT2
}

// 再导出一个type
// type用来给类型起别名
// 这个actions里是一个对象，会有很多函数，每个函数都会返回一个action
// 而 ./store/reducers/index.tsx 中的action会是下面某一个函数的返回值

export type Action = ADD | SUBTRACT;

// 把上面定义好的接口作用于下面
// 约束返回值的类型
export default {
    add():ADD{
        // 需要返回一个action对象
        // type为动作的类型
        return {type: types.ADD2}
    },
    subtract():SUBTRACT{
        // 需要返回一个action对象
        // type为动作的类型
        return {type: types.SUBTRACT2}
    },
    // 一秒后才执行这个行为
    addAsync():any{
        return function(dispatch: any, getState: any){
            setTimeout(function(){
                // 当1秒过后，会执行dispatch，派发出去，然后改变仓库的状态
                dispatch({type: types.ADD2})
            },1000);
        }
    }
}