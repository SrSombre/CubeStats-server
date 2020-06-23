"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "matches",
      [
        {
          id: 1,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          matchround: 1,
        },
        {
          id: 2,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          matchround: 1,
        },
        {
          id: 3,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          matchround: 1,
        },
        {
          id: 4,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          matchround: 1,
        },
        {
          id: 5,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          matchround: 2,
        },
        {
          id: 6,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          matchround: 2,
        },
        {
          id: 7,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          matchround: 2,
        },
        {
          id: 8,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          matchround: 2,
        },
        {
          id: 9,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          matchround: 3,
        },
        {
          id: 10,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          matchround: 3,
        },
        {
          id: 11,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          matchround: 3,
        },
        {
          id: 12,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          matchround: 3,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("matches", null, {});
  },
};
