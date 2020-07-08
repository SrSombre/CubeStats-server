"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "deckcardjoins",
      [
        {
          cardId: 1,
          deckId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 2,
          deckId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 50,
          deckId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 1,
          deckId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 3,
          deckId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 1,
          deckId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 5,
          deckId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 2,
          deckId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 1,
          deckId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 3,
          deckId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 2,
          deckId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 3,
          deckId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 1,
          deckId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 3,
          deckId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 2,
          deckId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 1,
          deckId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 2,
          deckId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 5,
          deckId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("deckcardjoins", null, {});
  },
};
