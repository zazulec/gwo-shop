import {
    SignUpAction, SIGN_UP, ResetWholeReduxAuthData, RESET_REDUX_WHOLE_AUTH_DATA,
} from '../types/authActionsTypes';


export default function signUp(login: string, password: string): SignUpAction {
    return {
        type: SIGN_UP,
        credentials: { login, password }
    }
}

export const resetWholeReduxAuthData = (): ResetWholeReduxAuthData => {
    return {
        type: RESET_REDUX_WHOLE_AUTH_DATA,
    }
}
