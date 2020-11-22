
const initState = {
    user: {},
};

export const authReducer = (state = initState, action: any) => {
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
        case "RESET_REDUX_WHOLE_AUTH_DATA":
            newState = {
                ...state,
                user: {}
            };
            break;
        default:
            return state
    }
    return newState;
}

