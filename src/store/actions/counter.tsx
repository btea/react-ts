import * as types from '../action-types'

// 定义两个接口，分别约束add和subtract的type类型
export interface ADD{
    type: typeof types.ADD
}
export interface SUBTRACT{
    type: typeof types.SUBTRACT
}

// 再导出一个type
// type用来给类型起别名
// 这个actions里是一个对象，会有很多函数，每个函数都会返回一个action
// 而 ./store/reducers/index.tsx 中的action会是下面某一个函数的返回值

export type Action = ADD | SUBTRACT;


export default {
    add(){
        return {type: types.ADD}
    },
    subtract(){
        return {type: types.SUBTRACT}
    }
}