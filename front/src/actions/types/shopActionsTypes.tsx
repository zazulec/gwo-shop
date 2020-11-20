export const FETCH_ALL_BOOKS = "FETCH_ALL_BOOKS";
export const ADD_BOOK_TO_CART = "ADD_BOOK_TO_CART";

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