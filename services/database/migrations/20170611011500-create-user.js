'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('user', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      alias: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      username: {
        type: Sequelize.STRING(45),
        unique: true,
        allowNull: false
      },
      first_name: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      last_name: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      email: {
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      phone_number: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      phone_number_alt: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      salary: {
        type: Sequelize.INTEGER(11),
        allowNull: true
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      permission_set: {
        type: "BLOB",
        allowNull: true
      },
      group_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'group',
          key: 'id'
        }
      },
      enabled: {
        type: Sequelize.INTEGER(4),
        allowNull: true
      },
      status: {
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
    return queryInterface.dropTable('user');
  }
};
