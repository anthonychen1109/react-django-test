import { combineReducers } from 'redux';

import UserReducer from './reducer_user';
import PostReducer from './reducer_post_user';

const rootReducer = combineReducers({
  UserReducer,
  PostReducer
});

export default rootReducer;
