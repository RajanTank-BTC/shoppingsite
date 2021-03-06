'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    fileName: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  Item.associate = function (models) {
    // associations can be defined here
  };
  return Item;
};