
export const SIGN_UP = "SIGN_UP"
export const RESET_REDUX_WHOLE_AUTH_DATA = "RESET_REDUX_WHOLE_AUTH_DATA"

interface SignUpCredentials {
    login: string,
    password: string,

}

export interface SignUpAction {
    type: typeof SIGN_UP,
    credentials: SignUpCredentials,
}
export interface ResetWholeReduxAuthData {
    type: typeof RESET_REDUX_WHOLE_AUTH_DATA,
}