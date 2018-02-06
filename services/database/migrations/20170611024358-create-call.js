'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('call', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      delacon_id: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      recorded_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      coached_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      coach_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      client_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: 'client',
          key: 'id'
        }
      },
      score_card_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: 'score_card',
          key: 'id'
        }
      },
      sales_person_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      call_category_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: 'call_category',
          key: 'id'
        }
      },
      recording_file: {
        type: Sequelize.STRING(256),
        allowNull: true
      },
      incoming_phone_number: {
        type: Sequelize.STRING(15),
        allowNull: true
      },
      status_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '1'
      },
      uuid: {
        type: Sequelize.CHAR(36),
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      reviewer_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      unknown_sales_person: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
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
    return queryInterface.dropTable('call');
  }
};
