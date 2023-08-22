const stockRoutes = require('express').Router();

const { getStockBySku_controllers } = require('../controllers/stock/getStockBySku_controllers');

stockRoutes.get('/:sku', getStockBySku_controllers);

module.exports = stockRoutes;