const { Op } = require('sequelize');
const { Product } = require('../../db');

const getProducts_H = async (page, limit, filters, sortOrder) => {
    try {
        const offset = (page - 1) * limit;

        const whereClause = {};

        if (filters.name) {
            whereClause.name = {
                [Op.iLike]: `%${filters.name}%`
            };
        };

        if (filters.sport && Array.isArray(filters.sport) && filters.sport.length > 0) {
            whereClause.sport = {
                [Op.in]: filters.sport
            };
        };

        if (filters.gender) {
            whereClause.gender = filters.gender;
        };

        const order = sortOrder === 'desc' ? 'DESC' : 'ASC';

        const products = await Product.findAll({
            where: whereClause,
            order: [['id', order]],
            limit: limit,
            offset: offset,
        });

        return products;
    } catch (error) {
        throw new Error('Error al obtener productos');
    };
};

module.exports = { getProducts_H };