import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Taskreducer from './task';
import UiReducer from './ui';
import auth from './auth';
import cart from './cart';
const rootReducer = combineReducers({
    task : Taskreducer,
    ui : UiReducer,
    auth : auth,
    cart,
    form: formReducer,
});
export default rootReducer;

