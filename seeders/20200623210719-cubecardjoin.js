"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "cubecardjoins",
      [
        {
          cardId: 1,
          cubeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 2,
          cubeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 3,
          cubeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 4,
          cubeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 5,
          cubeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("cubecardjoins", null, {});
  },
};
