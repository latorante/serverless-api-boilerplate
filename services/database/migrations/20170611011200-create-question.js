'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('question', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      description: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      client_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true
      },
      question_category_id: {
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
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('question');
  }
};
