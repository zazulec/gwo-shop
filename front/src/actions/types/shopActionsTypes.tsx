export const FETCH_ALL_BOOKS = "FETCH_ALL_BOOKS";
export const ADD_BOOK_TO_CART = "ADD_BOOK_TO_CART";
export const SET_ORDER_RESULT = "SET_ORDER_RESULT";

export interface FetchAllBooksAction {
    type: typeof FETCH_ALL_BOOKS,
    allBooks: {
        data: [],
        metadata: {},
    }
}
export interface AddBookToCart {
    type: typeof ADD_BOOK_TO_CART,
    cart: [
        {}
    ]
}
export interface SetOrderResult {
    type: typeof SET_ORDER_RESULT,
    result: any
}
