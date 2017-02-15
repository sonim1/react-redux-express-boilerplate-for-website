import { combineReducers } from 'redux';
import CounterReducer from './Counter';

const rootReducer = combineReducers({
  count: CounterReducer
});

export default rootReducer;
