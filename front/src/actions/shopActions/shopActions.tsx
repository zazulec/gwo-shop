import { FetchAllBooksAction, AddBookToCart, FETCH_ALL_BOOKS, ADD_BOOK_TO_CART } from "../types/shopActionsTypes";

export const fetchAllBooks = (data: any): FetchAllBooksAction => {
    return {
        type: FETCH_ALL_BOOKS,
        allBooks: data,
    }
}
export const addBookToCart = (data: any): AddBookToCart => {
    console.log('data w akcji', data)
    return {
        type: ADD_BOOK_TO_CART,
        cart: data,
    }
}





