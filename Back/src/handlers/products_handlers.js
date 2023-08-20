const { Sequelize, Op } = require('sequelize');
const { Product } = require('../db');

exports.getProductsRandom = async () => {
    try {
        const products = await Product.findAll({
            attributes: [
                'name',
                'slug',
                'brand',
                'discount',
                'currentPrice',
                'standard_price',
                [Sequelize.literal('image[1]'), 'image_standar'],
                [Sequelize.literal('image[2]'), 'image_hover'],
            ],
            order: Sequelize.literal('random()'),
            limit: 12
        });

        return products;
    } catch (error) {
        throw new Error('Error al obtener productos');
    };
};

exports.getNewsProducts = async () => {
    try {
        const products = await Product.findAll({
            attributes: [
                'name',
                'slug',
                'brand',
                'discount',
                'currentPrice',
                'standard_price',
                [Sequelize.literal('image[1]'), 'image_standar'],
                [Sequelize.literal('image[2]'), 'image_hover'],
            ],
            order: [['id', 'DESC']],
            limit: 12
        })

        return products;
    } catch (error) {
        throw new Error('Error al obtener productos');
    };
};

exports.getProductsByName = async (name) => {
    try {
        const products = await Product.findAll({
            where: { name: { [Op.iLike]: `%${name}%` } },
            attributes: [
                'name',
                'slug',
                'brand',
                'discount',
                'currentPrice',
                'standard_price',
                [Sequelize.literal('image[1]'), 'image_standar'],
                [Sequelize.literal('image[2]'), 'image_hover'],
            ],
        });

        return products;
    } catch (error) {
        throw new Error('Error al obtener productos por NAME');
    };
};

exports.getProductsBySku = async (sku) => {
    try {
        console.log(sku);
        const products = await Product.findAll({
            where: { sku }
        });

        return products;
    } catch (error) {
        throw new Error('Error al obtener productos por SKU');
    };
};