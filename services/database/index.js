'use strict';

// Libs
const Sequelize       = require('sequelize');
const DatabaseConfig  = require('./config/config');
const Environment     = require('../../common/environment');

// Models
const Call            = require('../../resources/call/model');
const CallCategory    = require('../../resources/call_category/model');

// Database
class Database {

  // Get sequalize object
  constructor(){
    // Sequelize
    // TODO: don't use "development", figure out from process.env
    this.sequelize = new Sequelize(
      DatabaseConfig.development.database,
      DatabaseConfig.development.username,
      DatabaseConfig.development.password,
      DatabaseConfig.development // Rest of the config variables
    );
    // Load models
    this.loadModels();
  }

  // Right now, non-automatic
  // TODO: make automatic, using fs
  loadModels(){
    this.sequelize.modelManager.addModel(CallCategory(this.sequelize));
    this.sequelize.modelManager.addModel(Call(this.sequelize));
  }
}

module.exports = Database;
