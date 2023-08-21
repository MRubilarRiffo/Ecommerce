const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  	sequelize.define('Stock', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		sku: {
			type: DataTypes.STRING,
			allowNull: false,
			references: {
				model: "Products",
				key: "sku",
			},
		},
		size: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
  	}, {
		timestamps: false,
	});
};