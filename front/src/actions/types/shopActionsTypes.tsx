export const FETCH_ALL_BOOKS = "FETCH_ALL_BOOKS";

export interface FetchAllBooksAction {
    type: typeof FETCH_ALL_BOOKS,
    allBooks: {
        data: [],
        metadata: {},
    }
}