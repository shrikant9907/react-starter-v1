import { combineReducers } from 'redux';

import BlogReducer from './blogReducer';
import CounterReducer from './counterReducer';

const reducer = combineReducers({
    posts: BlogReducer,
    counter: CounterReducer
}); 

export default reducer;