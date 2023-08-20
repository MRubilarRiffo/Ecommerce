import axios from 'axios';
import * as actionTypes from './actions-type';


export const getProductsRandom = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/products/products-random`);
            return dispatch({ type: actionTypes.GET_PRODUCTS_RANDOM, payload: response.data });
        } catch (error) {
            console.log(error.response.data);
        };
    };
};

export const getNewsProducts = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/products/news-products`);
            return dispatch({ type: actionTypes.NEWS_PRODUCTS, payload: response.data });
        } catch (error) {
            console.log(error.response.data);
        };
    };
};

export const getAllProducts = (search) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/products?name=${search}`);
            return dispatch({ type: actionTypes.ALL_PRODUCTS, payload: response.data });
        } catch (error) {
            console.log(error.response.data);
        };
    };
};

export const getDetails = (sku) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/products/${sku}`);
            return dispatch({ type: actionTypes.GET_DETAILS, payload: response.data });
        } catch (error) {
            console.log(error.response.data);
        };
    };
};