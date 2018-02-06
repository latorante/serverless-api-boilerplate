'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('comment', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      comment_type: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      call_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: 'call',
          key: 'id'
        }
      },
      uuid: {
        type: Sequelize.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
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
    return queryInterface.dropTable('comment');
  }
};
