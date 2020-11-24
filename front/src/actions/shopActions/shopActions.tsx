import { AddBookToCart, ADD_BOOK_TO_CART, FetchAllBooksAction, FETCH_ALL_BOOKS, RESET_REDUX_WHOLE_SHOP_DATA, ResetWholeReduxShopData, AddBookQuantity, DeleteBookQuantity, ADD_BOOK_QUANTITY, DELETE_BOOK_QUANTITY } from "../types/shopActionsTypes";


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


export const addBookQuantity = (data: number): AddBookQuantity => {
    return {
        type: ADD_BOOK_QUANTITY,
        bookId: data,
    }
}

export const deleteBookQuantity = (data: number): DeleteBookQuantity => {
    return {
        type: DELETE_BOOK_QUANTITY,
        bookId: data,
    }
}


