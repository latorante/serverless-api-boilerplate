'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('status', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true
      },
      uuid: {
        type: Sequelize.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('status');
  }
};
