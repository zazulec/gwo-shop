import shopReducer from './shopReducer';
import { combineReducers } from "redux";

const appReducer = combineReducers({
    shop: shopReducer,
});

const rootReducer = (state: any, action: any) => {
    if (action.type === "RESET_STORE") {
        return state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;