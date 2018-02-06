// import { Resource } from "../resource";
// import { Database } from "../../services/database";

// Libs
// const ResponseCode  = require('http-status-codes');
// const Database      = require('../../services/database');
// const Sequelize     = require('sequelize');

// Libs
import ResponseCode from "http-status-codes";
import Resource from "../../common/resource";
import { methodRequiresInBody, methodOmmitsOnReturn, methodRequiresInQuery } from "../../common/decorators";

/**
 * Todos
 *
 * ednpoint:
 * todos/
 */
export default class Todos extends Resource {

  // Init function, to utilize libraries, configs, variables
  init() {
    // this.db = new Database();
  }

  /**
   * Handle GET method
   * @param resolve
   * @param reject
   */
  @methodRequiresInQuery(['uuid', { field: 'name', message: 'Required message' }])
  @methodOmmitsOnReturn(['id', 'user.status.id', ''])
  handleGET(resolve, reject) {
    resolve(
        this.generateSimpleResponseObject(
            999,
            { id: 'aaa', test: 'ddd', hello: 2222 }
        )
    );
  }
}