const { Router } = require('express');
const productsRoutes = require('./productsRoute');
const stockRoutes = require('./stockRoute');

const router = Router();

router.use('/products', productsRoutes);

router.use('/stock', stockRoutes)

module.exports = router;