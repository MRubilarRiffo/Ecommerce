const { getProductsBySku } = require('../../handlers/products_handlers');

const getProductsBySku_Controllers = async (req, res) => {
    try {
        const { sku } = req.params;
        
        const products = await getProductsBySku(sku);

        products.error
            ? res.status(400).send(products.error)
            : res.json(products);
    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = { getProductsBySku_Controllers };