const initState = {
    allBooks: null
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
    }
    return newState;
};

export default shopReducer;
