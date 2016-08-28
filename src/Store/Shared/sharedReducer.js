import { handleActions } from 'redux-actions';

import sharedModel from './sharedModel.js';
import { testAction } from './sharedActions.js';

const shared = handleActions({
	[testAction().type]: (state) => {
		return state.merge({
			currentNav: 'true',
		})}
}, new sharedModel());

export default shared;
