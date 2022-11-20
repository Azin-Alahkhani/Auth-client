import { combineReducers } from "redux";
import auth from './Auth'
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    auth,
    form : formReducer,
})