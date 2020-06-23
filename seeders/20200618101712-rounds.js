"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "rounds",
      [
        {
          id: 1,
          cubeId: 1,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          date: new Date(),
          cubeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          cubeId: 1,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("rounds", null, {});
  },
};
