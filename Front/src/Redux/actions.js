import axios from 'axios';
import * as actionTypes from './actions-type';


export const getProductsRandom = () => {
    return async function (dispatch) {
        try {
            const sortOrder = 'random';
            const fields = 'slug,name,brand,discount,currentPrice,standard_price,image_standar,image_hover';
            const response = await axios.get(`http://localhost:3001/products?sortOrder=${sortOrder}&fields=${fields}`);
            return dispatch({ type: actionTypes.GET_PRODUCTS_RANDOM, payload: response.data });
        } catch (error) {
            console.log(error.response.data);
        };
    };
};

export const getNewsProducts = () => {
    return async function (dispatch) {
        try {
            const sortOrder = 'desc';
            const fields = 'slug,name,brand,discount,currentPrice,standard_price,image_standar,image_hover';
            const response = await axios.get(`http://localhost:3001/products?sortOrder=${sortOrder}&fields=${fields}`);
            return dispatch({ type: actionTypes.NEWS_PRODUCTS, payload: response.data });
        } catch (error) {
            console.log(error.response.data);
        };
    };
};

export const getAllProducts = (search) => {
    return async function (dispatch) {
        try {
            const fields = 'slug,name,brand,discount,currentPrice,standard_price,image_standar,image_hover';
            const response = await axios.get(`http://localhost:3001/products?name=${search}&fields=${fields}`);
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

export const getStockDetails = (sku) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/stock/${sku}`);
            return dispatch({ type: actionTypes.GET_STOCK_DETAILS, payload: response.data });
        } catch (error) {
            console.log(error.response.data);
        };
    };
};