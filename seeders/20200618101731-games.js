"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "games",
      [
        {
          id: 1,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 1,
        },
        {
          id: 2,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 1,
        },
        {
          id: 3,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 1,
        },
        {
          id: 4,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 2,
        },
        {
          id: 5,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 2,
        },
        {
          id: 6,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 2,
        },
        {
          id: 7,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 3,
        },
        {
          id: 8,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 3,
        },
        {
          id: 9,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 3,
        },
        {
          id: 10,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 4,
        },
        {
          id: 11,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 4,
        },
        {
          id: 12,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 4,
        },
        {
          id: 13,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 5,
        },
        {
          id: 14,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 5,
        },
        {
          id: 15,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 5,
        },
        {
          id: 16,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 6,
        },
        {
          id: 17,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 6,
        },
        {
          id: 18,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 6,
        },
        {
          id: 19,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 7,
        },
        {
          id: 20,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 7,
        },
        {
          id: 21,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 7,
        },
        {
          id: 22,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 8,
        },
        {
          id: 23,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 8,
        },
        {
          id: 24,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 8,
        },
        {
          id: 25,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 9,
        },
        {
          id: 26,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 9,
        },
        {
          id: 27,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 9,
        },
        {
          id: 28,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 10,
        },
        {
          id: 29,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 10,
        },
        {
          id: 30,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 10,
        },
        {
          id: 31,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 11,
        },
        {
          id: 32,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 11,
        },
        {
          id: 33,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 11,
        },
        {
          id: 34,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 12,
        },
        {
          id: 35,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 12,
        },
        {
          id: 36,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          gamematch: 12,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("games", null, {});
  },
};