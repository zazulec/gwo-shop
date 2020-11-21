import { AddBookToCart, ADD_BOOK_TO_CART, FetchAllBooksAction, FETCH_ALL_BOOKS, SET_ORDER_RESULT, SetOrderResult } from "../types/shopActionsTypes";


export const fetchAllBooks = (data: any): FetchAllBooksAction => {
    return {
        type: FETCH_ALL_BOOKS,
        allBooks: data,
    }
}
export const addBookToCart = (data: any): AddBookToCart => {
    return {
        type: ADD_BOOK_TO_CART,
        cart: data,
    }
}
export const setOrderResult = (data: any): SetOrderResult => {
    return {
        type: SET_ORDER_RESULT,
        result: data,
    }
}


