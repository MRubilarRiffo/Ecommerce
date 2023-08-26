const { Sequelize, Op } = require('sequelize');
const { Product } = require('../db');

exports.getProductsBySku = async (sku) => {
    try {
        const products = await Product.findAll({
            where: { sku }
        });

        return products;
    } catch (error) {
        throw new Error('Error al obtener productos por SKU');
    };
};