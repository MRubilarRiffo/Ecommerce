const { Op } = require('sequelize');
const { Product } = require('../../db');

async function getTotalProducts(filters) {
    try {
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

        const totalProducts = await Product.count({
            where: whereClause,
        });

        return totalProducts;
    } catch (error) {
        throw new Error('Error al obtener la cantidad total de productos');
    };
};

module.exports = { getTotalProducts };
