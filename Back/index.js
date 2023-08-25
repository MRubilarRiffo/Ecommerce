const server = require('./src/server');
const axios = require('axios');
const { conn } = require('./src/db');

const PORT = 3001;

conn.sync({ force: false })
    // .then(async () => {
    //     const gender = ['hombre', 'mujer'];

    //     for (const c of gender) {
    //         try {
    //             const response = await axios.get(`http://localhost:5000/${c}`);
    //             for (const product of response.data) {
    //                 const existingProduct = await conn.models.Product.findOne({
    //                     where: {
    //                         sku: product.id
    //                     }
    //                 });

    //                 if (!existingProduct) {
    //                     await conn.models.Product.create({
    //                         name: product.name,
    //                         sku: product.id,
    //                         image: product.view_list.filter(c => !c.image_url.includes('video')).map(c => c.image_url),
    //                         brand: product.attribute_list.brand,
    //                         color: product.attribute_list.color,
    //                         gender: product.attribute_list.gender,
    //                         sport: product.attribute_list.sport,
    //                         category: product.attribute_list.category,
    //                         on_model_measurement: product.attribute_list.on_model_measurement || null,
    //                         currentPrice: product.pricing_information.currentPrice,
    //                         standard_price: product.pricing_information.standard_price,
    //                         discount: Math.round(100 - (product.pricing_information.currentPrice * 100 / product.pricing_information.standard_price)),
    //                         slug: `${product.name.trim().toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f\s]/g, "").replace(/\//g, "-")}/${product.id}`
    //                     });

    //                     const sizes = product.variation_list.map(c => c.size);
    //                     const stockData = sizes.map(size => {
    //                         return {
    //                             sku: product.id,
    //                             size: size,
    //                             quantity: Math.floor(Math.random() * 8),
    //                         };
    //                     });

    //                     await conn.models.Stock.bulkCreate(stockData);
    //                 } else {
    //                     console.log(`Producto con SKU ${product.id} ya existe en la base de datos.`);
    //                 }
    //             }
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    // })
    // .then(async () => {
    //     const response = await axios.get('http://localhost:5000/users');

    //     const usersData = response.data.map(user => {
	// 		return {
	// 			name: user.name,
	// 			last_name: user.last_name,
	// 			phone: user.phone,
	// 			mail: user.mail,
	// 			password: user.password,
	// 			administrator: user.administratos,
	// 			active: user.active
	// 		};
	// 	});

    //     await Promise.all(usersData.map(userData => conn.models.User.create(userData)));
    // })
    .then(() => {
        server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
    })
    .catch(error => console.log(error));
