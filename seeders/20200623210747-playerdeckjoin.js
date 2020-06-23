"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "playerdeckjoins",
      [
        {
          playerId: 1,
          deckId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          playerId: 2,
          deckId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          playerId: 3,
          deckId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          playerId: 4,
          deckId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          playerId: 5,
          deckId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          playerId: 6,
          deckId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          playerId: 7,
          deckId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          playerId: 8,
          deckId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("playerdeckjoins", null, {});
  },
};
