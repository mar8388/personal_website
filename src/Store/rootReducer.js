import { combineReducers } from 'redux';

import shared from './Shared/sharedReducer.js';

const rootReducer = combineReducers({
	shared,
});

export default rootReducer;
