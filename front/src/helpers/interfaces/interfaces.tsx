import { ComponentState } from "react";
import { Action } from 'redux';

export interface ItemCardProps {
    book: {
        title: string,
        cover_url: string,
        author: string,
        id: number,
        pages: number,
        price: number,
        currency: string,
        quantity: number,
    },
    addBookToCart?: any,
    shoppingCart?: any,
    component?: string,
}

export interface FormPageState {
    shop: {
        shoppingCart: any[]
    }
}

export interface ShoppingCartPageState {
    shop: { shoppingCart: [] }

}

export interface CustomButtonProps {
    title: string,
    onClick?: (data: any) => any,
    style?: {},
    buttonStyle?: {}
}

export interface CustomLoginProps {
    type: string,
    labelText: string,
    error?: string,
    saveValue: Function,
    toggleError: Function,
    value: string,
    messageError: string,

}

export interface CustomLoginInputProps {
    type: string,
    labelText: string,
    value: string,
    readOnly?: boolean,
}

export interface StyledPaginationProps {
    handlePaginationChange: (event: React.ChangeEvent<unknown>, value: number) => any;
    page: number;
}

export interface RouteState {
    auth: {
        user?: any
    },
}

export interface PrivateRouteProps {
    path: any,
    user?: any,
    auth?: any,
    component: ComponentState,
    exact: boolean,
}

export interface ShoppingCartButtonProps {
    counter: Number,
}

export interface ScrollToTopProps {
    location: any,
    history: any,
    match: any,
}

export interface LoginPageProps {
    signUp: (login: string, password: string) => Action,
}

export interface MainPageProps {
    fetchBooks: (page: number) => Action;
    allBooks: any[],
    shoppingCart: Array<{}>,
}

export interface MainPageState {
    shop: {
        allBooks: {
            data: any[]
        }
        shoppingCart: Array<{}>,
    }
}

export interface AppProps {
    user?: any,
}

export interface AppState {
    auth: any,
}

