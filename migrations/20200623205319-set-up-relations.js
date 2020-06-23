"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("cubecardjoins", "cardId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cards",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("cubecardjoins", "cubeId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cubes",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("cubedeckjoins", "deckId", {
      type: Sequelize.INTEGER,
      references: {
        model: "decks",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("cubedeckjoins", "cubeId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cubes",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("deckcardjoins", "deckId", {
      type: Sequelize.INTEGER,
      references: {
        model: "decks",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("deckcardjoins", "cardId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cards",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("playerdeckjoins", "playerId", {
      type: Sequelize.INTEGER,
      references: {
        model: "players",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("playerdeckjoins", "deckId", {
      type: Sequelize.INTEGER,
      references: {
        model: "decks",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("cubecardjoins", "cardId");
    await queryInterface.removeColumn("cubecardjoins", "cubeId");
    await queryInterface.removeColumn("cubedeckjoins", "cubeId");
    await queryInterface.removeColumn("cubedeckjoins", "deckId");
    await queryInterface.removeColumn("deckcardjoins", "deckId");
    await queryInterface.removeColumn("deckcardjoins", "cardId");
    await queryInterface.removeColumn("playerdeckjoins", "playerId");
    await queryInterface.removeColumn("playerdeckjoins", "deckId");
  },
};
