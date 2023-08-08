const { getNewsProducts } = require('../../handlers/products_handlers');

const getNewsProducts_controllers = async (req, res) => {
    try {
        const products = await getNewsProducts();

        products.error
            ? res.status(400).send(products.error)
            : res.json(products);
    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = { getNewsProducts_controllers };