export const FETCH_ALL_BOOKS = "FETCH_ALL_BOOKS";
export const ADD_BOOK_TO_CART = "ADD_BOOK_TO_CART";
export const RESET_REDUX_WHOLE_SHOP_DATA = "RESET_REDUX_WHOLE_SHOP_DATA";
export const ADD_BOOK_QUANTITY = "ADD_BOOK_QUANTITY";
export const DELETE_BOOK_QUANTITY = "DELETE_BOOK_QUANTITY";
export const DELETE_SINGLE_BOOK_FROM_CART = "DELETE_SINGLE_BOOK_FROM_CART";

interface FetchAllBooksAction {
    type: typeof FETCH_ALL_BOOKS,
    allBooks: {
        data: [],
        metadata: {},
    }
}

interface AddBookToCartAction {
    type: typeof ADD_BOOK_TO_CART,
    cart: [
        {}
    ]
}

interface ResetWholeReduxShopDataAction {
    type: typeof RESET_REDUX_WHOLE_SHOP_DATA,
}

interface AddBookQuantityAction {
    type: typeof ADD_BOOK_QUANTITY,
    bookId: number
}

interface DeleteBookQuantityAction {
    type: typeof DELETE_BOOK_QUANTITY,
    bookId: number
}
interface DeleteSingleBookFromCartAction {
    type: typeof DELETE_SINGLE_BOOK_FROM_CART,
    bookId: number
}

export type Actions = FetchAllBooksAction | AddBookToCartAction | ResetWholeReduxShopDataAction | AddBookQuantityAction | DeleteBookQuantityAction | DeleteSingleBookFromCartAction
