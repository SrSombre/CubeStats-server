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
        },
        {
          name: "BlueDeck",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "GreenDeck",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "RedDeck",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "WhiteDeck",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ColorlessDeck",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "multicolorDeck",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "5cGoodstuffDeck",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SecondDeck",

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
