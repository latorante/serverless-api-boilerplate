'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('score_card_category', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      score_card_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'score_card',
          key: 'id'
        }
      },
      category_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'category',
          key: 'id'
        }
      },
      sequence: {
        type: Sequelize.STRING(45),
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
    return queryInterface.dropTable('score_card_category');
  }
};
