import { SignUpAction } from '../actions/types/authActionsTypes';

const initState = {
    user: {},
};

export const authReducer = (state = initState, action: SignUpAction) => {
    let newState = state;
    switch (action.type) {
        case "SIGN_UP":
            newState = {
                ...state,
                user: {
                    login: action.credentials.login,
                    passowrd: action.credentials.password,
                }
            };
            break;
    }
    return newState;
}

