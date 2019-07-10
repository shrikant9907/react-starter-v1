
// Combining the reducers
import { combineReducers } from 'redux';

import BlogReducer from './blogReducer';
import CounterReducer from './counterReducer';

export default combineReducers({
    blogposts: BlogReducer,
    counter: CounterReducer
}); 
 
// export default BlogReducer;