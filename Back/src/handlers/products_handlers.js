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
            limit: 10
        });

        return products;
    } catch (error) {
        throw error;
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
            limit: 10
        })

        return products;
    } catch (error) {
        throw error;
    };
};

exports.getgetProductsByName = async (name) => {
    try {
        const products = await Product.findAll({
            where: { name: { [Op.iLike]: `%${name}%` } }
        });

        return products;
    } catch (error) {
        throw error;
    };
};