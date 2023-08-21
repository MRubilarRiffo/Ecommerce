const server = require('./src/server');
const axios = require('axios');
const { conn } = require('./src/db');

const PORT = 3001;

conn.sync({ force: true })
    .then(async () => {
        const response = await axios.get('http://localhost:5000/hombre');

        response.data.map(async product => {
            await conn.models.Product.create ({
                name: product.name,
                sku: product.id,
                image: product.view_list.filter(c => !c.image_url.includes('video')).map(c => c.image_url),
                brand: product.attribute_list.brand,
                color: product.attribute_list.color,
                gender: product.attribute_list.gender,
                sport: product.attribute_list.sport,
                category: product.attribute_list.category,
                on_model_measurement: product.attribute_list.on_model_measurement || null,
                currentPrice: product.pricing_information.currentPrice,
                standard_price: product.pricing_information.standard_price,
                discount: Math.round(100 - (product.pricing_information.currentPrice * 100 / product.pricing_information.standard_price)),
                variation_list: product.variation_list,
                slug: `${product.name.trim().toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f\s]/g, "").replace(/\//g, "-")}/${product.id}`
            });

            const sizes = product.variation_list.map(c => c.size)

            const stockData = sizes.map(size => {
                    return {
                        sku: product.id,
                        size: size,
                        quantity: Math.floor(Math.random() * 3),
                    };
                });

            await conn.models.Stock.bulkCreate(stockData);
        });
    })
    .then(() => {
        server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
    })
    .catch(error => console.log(error));