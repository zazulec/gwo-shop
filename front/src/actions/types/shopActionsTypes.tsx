export const FETCH_ALL_BOOKS = "FETCH_ALL_BOOKS";
export const ADD_BOOK_TO_CART = "ADD_BOOK_TO_CART";
export const RESET_REDUX_WHOLE_SHOP_DATA = "RESET_REDUX_WHOLE_SHOP_DATA";
export const ADD_BOOK_QUANTITY = "ADD_BOOK_QUANTITY";
export const DELETE_BOOK_QUANTITY = "DELETE_BOOK_QUANTITY";

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

export interface ResetWholeReduxShopData {
    type: typeof RESET_REDUX_WHOLE_SHOP_DATA,
}

export interface AddBookQuantity {
    type: typeof ADD_BOOK_QUANTITY,
    bookId: number
}

export interface DeleteBookQuantity {
    type: typeof DELETE_BOOK_QUANTITY,
    bookId: number
}
