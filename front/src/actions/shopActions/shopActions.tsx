import { AddBookToCart, ADD_BOOK_TO_CART, FetchAllBooksAction, FETCH_ALL_BOOKS, RESET_REDUX_WHOLE_SHOP_DATA, ResetWholeReduxShopData } from "../types/shopActionsTypes";


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

export const resetWholeReduxShopData = (): ResetWholeReduxShopData => {
    return {
        type: RESET_REDUX_WHOLE_SHOP_DATA,
    }
}


