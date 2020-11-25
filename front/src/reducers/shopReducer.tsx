const initState = {
    allBooks: {
        data: null,
    },
    shoppingCart: [

    ] as any,
};
const shopReducer = (state = initState, action: any) => {
    let newState = state;
    switch (action.type) {
        case "FETCH_ALL_BOOKS":
            newState = {
                ...state,
                allBooks: action.allBooks,
            };
            break;
        case "ADD_BOOK_TO_CART":
            let data = { ...action.cart, quantity: 1 };
            newState = {
                ...state,
                shoppingCart: [...state.shoppingCart, data]
            };
            break;
        case "RESET_REDUX_WHOLE_SHOP_DATA":
            newState = {
                ...state,
                allBooks: {
                    data: null,
                },
                shoppingCart: []
            };
            break;
        case "ADD_BOOK_QUANTITY":
            const findIndexByIdToIncrement = state.shoppingCart.findIndex((e: { id: number; }) => e.id === action.bookId)
            const findObjectByIdToIncrement = state.shoppingCart.find((e: { id: number; }) => e.id === action.bookId)
            findObjectByIdToIncrement.quantity = findObjectByIdToIncrement.quantity + 1
            const incrementedStateData = Object.assign([], state.shoppingCart);
            incrementedStateData.splice(findIndexByIdToIncrement, 1, findObjectByIdToIncrement)
            newState = {
                ...state,
                shoppingCart: incrementedStateData
            }
            break;
        case "DELETE_BOOK_QUANTITY":
            let findIndexByIdToDelete = state.shoppingCart.findIndex((e: { id: number; }) => e.id === action.bookId)
            let findObjectByIdToDelete = state.shoppingCart.find((e: { id: number; }) => e.id === action.bookId)
            findObjectByIdToDelete.quantity = findObjectByIdToDelete.quantity -= 1;
            const decrementedStateData = Object.assign([], state.shoppingCart);
            decrementedStateData.splice(findIndexByIdToDelete, 1, findObjectByIdToDelete)
            newState = {
                ...state,
                shoppingCart: decrementedStateData
            }
            break;
        default:
            return state
    }
    return newState;
};

export default shopReducer;
