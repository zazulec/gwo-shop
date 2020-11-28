import { toast } from "react-toastify";
import { ThunkDispatch } from "redux-thunk";
import { myFetch } from "../../helpers/myFetch/myFetch";
import { AddBookQuantity, AddBookToCart, ADD_BOOK_QUANTITY, ADD_BOOK_TO_CART, DeleteBookQuantity, DELETE_BOOK_QUANTITY, FetchAllBooksAction, FETCH_ALL_BOOKS, ResetWholeReduxShopData, RESET_REDUX_WHOLE_SHOP_DATA } from "../types/shopActionsTypes";

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

export const fetchBooks: any = (page: number) => {
    return (dispatch: ThunkDispatch<{}, undefined, any>, ) => {
        myFetch(`/api/book?page=${page}`, {
            method: "get"
        }).then((data: any) => dispatch(fetchAllBooks(data)))
            .catch(() => {
                toast.error("Błąd pobierania danych.");
            });
    }
}
