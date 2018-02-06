// Libs
import * as Sequelize from 'sequelize';


class TodosModel extends Sequelize.Model {

  static attributes(): object {
    return {
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
    };
  }

  static options(sequelize: Sequelize): object {
    return {
      sequelize: sequelize,
      tableName: 'call_category',
      underscored: true,
      paranoid: true
    };
  }

  static associate(sequelize) {
    // this.belongsToMany(sequelize.Models.Role, { through: 'userroles' });
  }

  // Instance methods:
  // instanceMethod(){}
  // Class methods:
  // static classMethod(){}
}

// Doesn't get nicer than this folks
// until Sequelize creates a better way of extending the base class model
module.exports = (sequelize) => {
  return TodosModel.init(
      TodosModel.attributes(),
      TodosModel.options(sequelize)
  );
};