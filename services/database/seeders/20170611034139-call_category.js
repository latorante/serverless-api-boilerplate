'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'call_category',
      [
        { id: 1, name: "coachable", uuid: "18fdad8f-19c1-11e7-905c-062e883d2edb" },
        { id: 2, name: "noncoachable", uuid: "18gdad8f-19c1-11e7-905c-062e883d2edb" },
        { id: 3, name: "mishandled", uuid: "18fdhd8f-19c1-11e7-905c-062e883d2edb" },
      ],
      {}
    );
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(
      'call_category',
      null,
      {}
    );
  }
};
