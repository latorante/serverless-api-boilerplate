'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
        'client_type',
        [
          { id: 1, name: "Organisation", uuid: "238ebdc2-1403-442d-945a-8b2a2b5f3626" },
          { id: 2, name: "Business",     uuid: "3ee3bce9-a608-4ae5-b795-a84246221b3f" },
          { id: 3, name: "Department",   uuid: "b063ad3e-1821-11e7-905c-062e883d2edb" },
        ],
        {}
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(
        'client_type',
        null,
        {}
    );
  }
};
