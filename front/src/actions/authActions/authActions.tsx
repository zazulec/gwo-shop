import { SignUpAction, SIGN_UP } from '../types/authActionsTypes';


export default function signUp(login: string, password: string): SignUpAction {
    return {
        type: SIGN_UP,
        credentials: { login, password }
    }
}
