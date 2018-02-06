'use strict';

// Auth Service
class AuthService {

  // Passed from handler.js
  constructor(event, context, cb){
    // Athorize for now
    cb(null, this.generateDummyPolicy());
  }

  // Generate dummy policy
  generateDummyPolicy(){
    const authResponse = {};
          authResponse.principalId = 1;
    const policyDocument = {};
          policyDocument.Version = '2012-10-17';
          policyDocument.Statement = [];
    const statementOne = {};
          statementOne.Action = 'execute-api:Invoke';
          statementOne.Effect = 'effect';
          statementOne.Resource = 'Resource';
          policyDocument.Statement[0] = statementOne;
          authResponse.policyDocument = policyDocument;
    return authResponse;
  }

}

// Export
module.exports = AuthService;
