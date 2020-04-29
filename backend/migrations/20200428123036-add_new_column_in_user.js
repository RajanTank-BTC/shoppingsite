'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    var sequelize = queryInterface.sequelize;
    return sequelize.transaction(function (t) {
      var migrations = [];
      migrations.push(queryInterface.addColumn(
        'Users',
        'email',
        Sequelize.STRING,
        { transaction: t }
      ));
      migrations.push(queryInterface.addColumn(
        'Users',
        'password',
        Sequelize.STRING,
        { transaction: t }
      ));
      return Promise.all(migrations);
    });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
