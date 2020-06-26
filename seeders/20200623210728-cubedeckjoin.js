"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "cubedeckjoins",
      [
        {
          cubeId: 1,
          deckId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cubeId: 1,
          deckId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cubeId: 1,
          deckId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cubeId: 1,
          deckId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cubeId: 1,
          deckId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cubeId: 1,
          deckId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cubeId: 1,
          deckId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cubeId: 1,
          deckId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("cubedeckjoins", null, {});
  },
};
