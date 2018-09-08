import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import auth from './auth_reducer';

export default combineReducers({
    loadingBar: loadingBarReducer,
    auth
});