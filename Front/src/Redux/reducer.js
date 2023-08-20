import * as actionTypes from './actions-type';

const initialState = {
    products_random: [],
    news_products: [],
    all_products: [],
    details: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_RANDOM:
            return {
                ...state,
                products_random: action.payload
            };
        case actionTypes.NEWS_PRODUCTS:
            return {
                ...state,
                news_products: action.payload
            };
        case actionTypes.ALL_PRODUCTS:
            return {
                ...state,
                all_products: action.payload
            };
        case actionTypes.GET_DETAILS:
            return {
                ...state,
                details: action.payload
            };
        case actionTypes.RESET_DETAILS:
            return {
                ...state,
                details: []
            };
        default:
            return state;
    };
};

export { reducer };