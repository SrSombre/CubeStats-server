"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "decks",
      [
        {
          name: "BlackDeck",

          createdAt: new Date(),
          updatedAt: new Date(),
          playerId: 1,
          cubeId: 1,
        },
        {
          name: "BlueDeck",

          createdAt: new Date(),
          updatedAt: new Date(),
          playerId: 2,
          cubeId: 1,
        },
        {
          name: "GreenDeck",

          createdAt: new Date(),
          updatedAt: new Date(),
          playerId: 3,
          cubeId: 1,
        },
        {
          name: "RedDeck",

          createdAt: new Date(),
          updatedAt: new Date(),
          playerId: 4,
          cubeId: 1,
        },
        {
          name: "WhiteDeck",

          createdAt: new Date(),
          updatedAt: new Date(),
          playerId: 5,
          cubeId: 1,
        },
        {
          name: "ColorlessDeck",

          createdAt: new Date(),
          updatedAt: new Date(),
          playerId: 6,
          cubeId: 1,
        },
        {
          name: "multicolorDeck",

          createdAt: new Date(),
          updatedAt: new Date(),
          playerId: 7,
          cubeId: 1,
        },
        {
          name: "5cGoodstuffDeck",

          createdAt: new Date(),
          updatedAt: new Date(),
          playerId: 8,
          cubeId: 1,
        },
        {
          name: "SecondDeck",

          createdAt: new Date(),
          updatedAt: new Date(),
          playerId: 1,
          cubeId: 1,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("decks", null, {});
  },
};
