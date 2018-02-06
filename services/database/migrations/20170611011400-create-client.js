'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('client', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      client_type_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: 'client_type',
          key: 'id'
        }
      },
      parent_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true
      },
      uuid: {
        type: Sequelize.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      api_phone_number: {
        type: Sequelize.STRING(15),
        allowNull: true,
        validate: {
          is: /^[0-9]{1,15}$/
        }
      },
      phone_number: {
        type: Sequelize.STRING(15),
        allowNull: true,
        validate: {
          is: /^[0-9]{1,15}$/
        }
      },
      phone_number_alt: {
        type: Sequelize.STRING(15),
        allowNull: true,
        validate: {
          is: /^[0-9]{1,15}$/
        }
      },
      ext_id: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      score_card_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: 'score_card',
          key: 'id'
        }
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          isEmail: true
        }
      },
      package_hours: {
        type: Sequelize.INTEGER(11),
        allowNull: true
      },
      call_quota: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
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
    return queryInterface.dropTable('client');
  }
};
