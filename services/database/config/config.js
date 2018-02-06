"use strict";

// Database config
module.exports = {
  // Database config is set using env variables.
  // To setup local / dev look at at /serverless/setup.js:init

  // THIS is commmented out for now because of running db:migrate / db:seed:all locally
  // which doens't inject the process.env vars from serverless framework

  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_TYPE,
    "dialectOptions": {
      "socketPath": "/Applications/MAMP/tmp/mysql/mysql.sock"
    },
  "migrationStorageTableName": "sequelize_meta",
  "seederStorage": "sequelize",
  "seederStorageTableName": "sequelize_meta_seeds"
  },
  // Docker setup
  "docker": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_TYPE,
    "migrationStorageTableName": "sequelize_meta",
    "seederStorage": "sequelize",
    "seederStorageTableName": "sequelize_meta_seeds"
  },
  // Production database
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_TYPE,
    "migrationStorageTableName": "sequelize_meta",
    "seederStorage": "sequelize",
    "seederStorageTableName": "sequelize_meta_seeds"
  }
};
