import axios from 'axios';
import { GET_PRODUCTS_RANDOM, NEWS_PRODUCTS } from './actions-type';

export const getProductsRandom = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/products/products-random`);
            return dispatch({ type: GET_PRODUCTS_RANDOM, payload: response.data });
        } catch (error) {
            console.log(error.response.data);
        };
    };
};

export const getNewsProducts = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/products/news-products`);
            return dispatch({ type: NEWS_PRODUCTS, payload: response.data });
        } catch (error) {
            console.log(error.response.data);
        };
    };
};