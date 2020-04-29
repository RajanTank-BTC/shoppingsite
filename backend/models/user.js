'use strict';
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(instance, option) {
        if (instance.password) {
          instance.password = bcrypt.hashSync(instance.password, 10)
        }
      }
    }
  });
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};