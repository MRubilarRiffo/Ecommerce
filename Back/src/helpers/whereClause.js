const { Op } = require('sequelize');

const whereClause = (filters) => {
    const whereClause = {};

    if (filters.name) {
        whereClause.name = {
            [Op.iLike]: `%${filters.name}%`
        };
    };

    if (filters.sport) {
        whereClause.sport = {
            [Op.contains]: [filters.sport]
        };
    };

    if (filters.gender) {
        whereClause.gender = filters.gender;
    };

    if (filters.brand) {
        whereClause.brand = filters.brand;
    };

    if (filters.category) {
        whereClause.category = filters.category;
    };

    if (filters.discount) {
        whereClause.discount = {
            [Op.gte]: filters.discount
        };
    };

    return whereClause;
};

module.exports = { whereClause };