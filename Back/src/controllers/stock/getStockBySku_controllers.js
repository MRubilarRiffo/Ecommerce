const { getStockBySku_handlers } = require("../../handlers/stocks/getStockBySku");

const getStockBySku_controllers = async (req, res) => {
    try {
        const { sku } = req.params;

        const stock = await getStockBySku_handlers(sku);

        stock.error
            ? res.status(400).send(stock.error)
            : res.json(stock);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = { getStockBySku_controllers }