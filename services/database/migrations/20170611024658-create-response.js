'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('response', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      uuid: {
        type: Sequelize.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      response: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      question_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      call_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'call',
          key: 'id'
        }
      },
      updated_by: {
        type: Sequelize.INTEGER(11),
        allowNull: true
      },
      score_card_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true
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
    return queryInterface.dropTable('response');
  }
};
