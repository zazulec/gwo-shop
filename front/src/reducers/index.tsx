import shopReducer from './shopReducer';
import { combineReducers } from "redux";
import authReducer from './authReducer';

const appReducer = combineReducers({
    auth: authReducer,
    shop: shopReducer,

});

const rootReducer = (state: any, action: any) => {
    if (action.type === "RESET_STORE") {
        return state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;