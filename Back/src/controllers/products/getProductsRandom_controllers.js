const { getProductsRandom } = require('../../handlers/products_handlers');

const getProductsRandom_controllers = async (req, res) => {
    try {
        const products = await getProductsRandom();

        products.error
            ? res.status(400).send(products.error)
            : res.json(products);
    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = { getProductsRandom_controllers };