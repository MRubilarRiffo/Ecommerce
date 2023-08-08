const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    sku: {
      type: DataTypes.STRING,
      unique: true,
    },
    image: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    brand: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    sport: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    category: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
    on_model_measurement: {
      type: DataTypes.JSON,
    },
    currentPrice: {
      type: DataTypes.INTEGER,
    },
    standard_price: {
      type: DataTypes.INTEGER,
    },
    discount: {
      type: DataTypes.INTEGER,
    },
    variation_list: {
      type: DataTypes.ARRAY(DataTypes.JSON),
    },
  }, {
    timestamps: true,
  });
};
