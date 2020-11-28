import { toast } from "react-toastify";
import { ThunkDispatch } from "redux-thunk";
import { myFetch } from "../../helpers/myFetch/myFetch";
import { Actions, ADD_BOOK_QUANTITY, ADD_BOOK_TO_CART, DELETE_BOOK_QUANTITY, DELETE_SINGLE_BOOK_FROM_CART, FETCH_ALL_BOOKS, RESET_REDUX_WHOLE_SHOP_DATA } from "../types/shopActionsTypes";

export const fetchAllBooks = (data: any): Actions => {
    return {
        type: FETCH_ALL_BOOKS,
        allBooks: data,
    }
}

export const addBookToCart = (data: any): Actions => {
    return {
        type: ADD_BOOK_TO_CART,
        cart: data,
    }
}

export const resetWholeReduxShopData = (): Actions => {
    return {
        type: RESET_REDUX_WHOLE_SHOP_DATA,
    }
}

export const addBookQuantity = (data: number): Actions => {
    return {
        type: ADD_BOOK_QUANTITY,
        bookId: data,
    }
}

export const deleteBookQuantity = (data: number): Actions => {
    return {
        type: DELETE_BOOK_QUANTITY,
        bookId: data,
    }
}

export const fetchBooks: any = (page: number) => {
    return (dispatch: ThunkDispatch<{}, undefined, Actions>, ) => {
        myFetch(`/api/book?page=${page}`, {
            method: "get"
        }).then((data: any) => dispatch(fetchAllBooks(data)))
            .catch(() => {
                toast.error("Błąd pobierania danych.");
            });
    }
}

export const deleteSingleBookFromCart = (id: number): Actions => {
    return {
        type: DELETE_SINGLE_BOOK_FROM_CART,
        bookId: id,
    }
}
