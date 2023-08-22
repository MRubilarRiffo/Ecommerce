const { Stock } = require('../../db');

const getStockBySku_handlers = async (sku) => {
    try {
        const stock = await Stock.findAll({
            where: { sku },
            attributes: [
                'size',
                'quantity'
            ],
        });

        return stock;
    } catch (error) {
        throw new Error('Error al obtener stock por SKU');
    };
};

module.exports = { getStockBySku_handlers };