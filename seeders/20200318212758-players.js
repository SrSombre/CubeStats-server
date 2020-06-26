"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "players",
      [
        {
          name: "player1",
          email: "player1",
          password: bcrypt.hashSync("player1", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "player2",
          email: "player2",
          password: bcrypt.hashSync("player2", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "player3",
          email: "player3",
          password: bcrypt.hashSync("player3", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "player4",
          email: "player4",
          password: bcrypt.hashSync("player4", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "player5",
          email: "player5",
          password: bcrypt.hashSync("player5", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "player6",
          email: "player6",
          password: bcrypt.hashSync("player6", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "player7",
          email: "player7",
          password: bcrypt.hashSync("player7", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "player8",
          email: "player8",
          password: bcrypt.hashSync("player8", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("players", null, {});
  },
};
