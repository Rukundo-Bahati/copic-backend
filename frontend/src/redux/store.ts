import { createStore, combineReducers } from 'redux';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  user: userReducer, // Combine your reducers here
});

// Export RootState for useSelector
export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
