// 引入合并方法
import {combineReducers} from 'redux';
// 引入需要合并的reducer
import counter from './counter';
import counter2 from './counter2';

let reducers = combineReducers({
    counter,
    counter2
});
export default reducers;