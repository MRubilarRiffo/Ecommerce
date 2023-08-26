const productsRoutes = require('express').Router();

const { getProductsBySku_Controllers } = require('../controllers/products/getProductsBySku_Controllers');
const { getProducts_C } = require('../controllers/products/getProducts_C');

productsRoutes.get('/', getProducts_C);
productsRoutes.get('/:sku', getProductsBySku_Controllers);

module.exports = productsRoutes;