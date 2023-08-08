const { getgetProductsByName } = require('../../handlers/products_handlers');

const getProductsByName_Controllers = async (req, res) => {
    try {
        const { name } = req.query;

        const products = await getgetProductsByName(name);

        products.error
            ? res.status(400).send(products.error)
            : res.json(products);
    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = { getProductsByName_Controllers };