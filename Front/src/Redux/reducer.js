import { GET_PRODUCTS_RANDOM, NEWS_PRODUCTS, ALL_PRODUCTS } from './actions-type';

const initialState = {
    products_random: [],
    news_products: [],
    all_products: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_RANDOM:
            return {
                ...state,
                products_random: action.payload
            };
        case NEWS_PRODUCTS:
            return {
                ...state,
                news_products: action.payload
            };
        case ALL_PRODUCTS:
            return {
                ...state,
                all_products: action.payload
            };
        default:
            return state;
    };
};

export { reducer };