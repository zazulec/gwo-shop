import { FetchAllBooksAction, FETCH_ALL_BOOKS } from "../types/shopActionsTypes";

export const fetchAllBooks = (data: any): FetchAllBooksAction => {
    return {
        type: FETCH_ALL_BOOKS,
        allBooks: data,
    }
}





