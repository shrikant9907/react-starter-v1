
// Combining the reducers
import { combineReducers } from 'redux';

import BlogReducer from './blogReducer';
import CounterReducer from './counterReducer';


export default BlogReducer;

// export default combineReducers({
//     blogposts: BlogReducer,
//     counter: CounterReducer
// }); 