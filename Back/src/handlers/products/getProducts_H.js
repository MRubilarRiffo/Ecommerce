const { Sequelize } = require('sequelize');
const { Product } = require('../../db');
const { whereClause } = require('../../helpers/whereClause');

const getProducts_H = async (page, limit, filters, sortOrder, selectedFields, random) => {
    try {
        const offset = (page - 1) * limit;

        const where = whereClause(filters);

        const order = sortOrder === 'desc' ? 'DESC' : 'ASC';

        const allowedFields = ['name', 'sku', 'image', 'brand', 'color', 'gender', 'sport', 'category', 'slug', 'on_model_measurement', 'currentPrice', 'standard_price', 'discount', 'createdAt', 'updatedAt'];

        let attributes = selectedFields && selectedFields.filter(field => allowedFields.includes(field));

        const imageMapping = {
            'image_standar': [Sequelize.literal('image[1]'), 'image_standar'],
            'image_hover': [Sequelize.literal('image[2]'), 'image_hover']
        };

        if (selectedFields) {
            selectedFields.forEach(c => {
                if (imageMapping[c]) {
                    attributes.push(imageMapping[c]);
                }
            });
        };

        const products = await Product.findAll({
            where: where,
            order: sortOrder === 'random' ? Sequelize.literal('random()') : [['id', order]],
            limit: limit,
            offset: offset,
            attributes: attributes
        });

        return products;
    } catch (error) {
        throw new Error('Error al obtener productos');
    };
};

module.exports = { getProducts_H };