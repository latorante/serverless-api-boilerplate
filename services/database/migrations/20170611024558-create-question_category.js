'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('question_category', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      question_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      category_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      sequence: {
        type: Sequelize.INTEGER(11),
        allowNull: true
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
    return queryInterface.dropTable('question_category');
  }
};
