const productsRoutes = require('express').Router();

const { getProductsRandom_controllers } = require('../controllers/products/getProductsRandom_controllers');
const { getNewsProducts_controllers } = require('../controllers/products/getNewsProducts_controllers');
const { getProductsByName_Controllers } = require('../controllers/products/getProductsByName_Controllers');
const { getProductsBySku_Controllers } = require('../controllers/products/getProductsBySku_Controllers');
const { getProducts_C } = require('../controllers/products/getProducts_C');

productsRoutes.get('/products-random', getProductsRandom_controllers);
productsRoutes.get('/news-products', getNewsProducts_controllers);
productsRoutes.get('/', getProducts_C);
productsRoutes.get('/:sku', getProductsBySku_Controllers);

module.exports = productsRoutes;