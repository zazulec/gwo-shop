
export const SIGN_UP = "SIGN_UP"

interface SignUpCredentials {
    login: string,
    password: string,

}

export interface SignUpAction {
    type: typeof SIGN_UP,
    credentials: SignUpCredentials,
}