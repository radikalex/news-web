const articles = (state, action) => {
    switch (action.type) {
        case "GET_ARTICLES":
            return {
                ...state,
                articles: action.payload,
                loading: false
            };
        case "LOADING":
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};
export default articles;