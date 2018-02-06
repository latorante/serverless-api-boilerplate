'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
        'group',
        [
          { id: 1, name: "salesperson", permission_set: "{}", uuid: "7df48dab-74f2-42af-a7fc-3c6afd16d9aa" },
          { id: 2, name: "administrator", permission_set: "{}", uuid: "188f51f1-d1c5-485c-a2aa-72e138cf8f29" },
          { id: 3, name: "account manager", permission_set: "{}", uuid: "5a0604d7-30de-484c-a1c8-446863e9069f" },
          { id: 4, name: "call coach", permission_set: "{}", uuid: "fa303a31-02fc-4349-a5b0-c769fc3d0212" },
          { id: 5, name: "organisation owner", permission_set: "{}", uuid: "ee2f9fc6-2feb-11e7-905c-062e883d2edb" },
        ],
        {}
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(
        'group',
        null,
        {}
    );
  }
};
