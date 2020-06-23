"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "decks",
      [
        {
          name: "BlackDeck",

          playerId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BlueDeck",

          playerId: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "GreenDeck",

          playerId: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "RedDeck",

          playerId: 4,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "WhiteDeck",

          playerId: 5,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ColorlessDeck",

          playerId: 6,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "multicolorDeck",

          playerId: 7,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "5cGoodstuffDeck",

          playerId: 8,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SecondDeck",

          playerId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("decks", null, {});
  },
};
