'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
        'status',
        [
          { id: 1, name: "Open", uuid: "f3fade87-ea9e-4d03-b014-eb9abaa631c5" },
          { id: 2, name: "Closed", uuid: "f14de4a9-f13d-4446-b3fb-80e94d3d8d38" },
          { id: 3, name: "Ready For Review", uuid: "358c70b0-b7e6-467b-aca4-8c94e3b9b93c" },
          { id: 4, name: "Reviewed", uuid: "c876044e-07b2-401a-a2f3-9b1ec7e42e7a" },
          { id: 5, name: "In Review", uuid: "cf1cacb6-0d7d-40e8-8935-1207ea898074" },
        ],
        {}
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(
        'status',
        null,
        {}
    );
  }
};
