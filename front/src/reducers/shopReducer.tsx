const initState = {
    allBooks: {
        data: null,
    },
    shoppingCart: [] as any,
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
        default:
            return state
    }
    return newState;
};

export default shopReducer;
