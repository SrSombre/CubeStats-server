"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("players", "deckId", {
      type: Sequelize.INTEGER,
      references: {
        model: "players",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("players", "matchId", {
      type: Sequelize.INTEGER,
      references: {
        model: "players",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("players", "roundId", {
      type: Sequelize.INTEGER,
      references: {
        model: "players",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("decks", "cardId", {
      type: Sequelize.INTEGER,
      references: {
        model: "decks",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("decks", "matchId", {
      type: Sequelize.INTEGER,
      references: {
        model: "decks",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("decks", "playerId", {
      type: Sequelize.INTEGER,
      references: {
        model: "decks",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("decks", "roundId", {
      type: Sequelize.INTEGER,
      references: {
        model: "decks",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("cubes", "cardId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cubes",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("cubes", "deckId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cubes",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("cubes", "roundId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cubes",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("cards", "deckId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cards",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("cards", "cubeId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cards",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("rounds", "playerId", {
      type: Sequelize.INTEGER,
      references: {
        model: "rounds",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("rounds", "deckId", {
      type: Sequelize.INTEGER,
      references: {
        model: "rounds",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("rounds", "matchId", {
      type: Sequelize.INTEGER,
      references: {
        model: "rounds",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("rounds", "resultId", {
      type: Sequelize.INTEGER,
      references: {
        model: "rounds",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("matches", "gameId", {
      type: Sequelize.INTEGER,
      references: {
        model: "matches",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("matches", "playerId", {
      type: Sequelize.INTEGER,
      references: {
        model: "matches",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("matches", "deckId", {
      type: Sequelize.INTEGER,
      references: {
        model: "matches",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("matches", "resultId", {
      type: Sequelize.INTEGER,
      references: {
        model: "matches",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("matches", "roundId", {
      type: Sequelize.INTEGER,
      references: {
        model: "matches",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("games", "matchId", {
      type: Sequelize.INTEGER,
      references: {
        model: "games",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("games", "resultId", {
      type: Sequelize.INTEGER,
      references: {
        model: "games",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("results", "gameId", {
      type: Sequelize.INTEGER,
      references: {
        model: "results",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("results", "matchId", {
      type: Sequelize.INTEGER,
      references: {
        model: "results",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("results", "roundId", {
      type: Sequelize.INTEGER,
      references: {
        model: "results",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("players", "deckId");
    await queryInterface.removeColumn("players", "matchId");
    await queryInterface.removeColumn("players", "roundId");
    await queryInterface.removeColumn("decks", "cardId");
    await queryInterface.removeColumn("decks", "matchId");
    await queryInterface.removeColumn("decks", "playerId");
    await queryInterface.removeColumn("decks", "roundId");
    await queryInterface.removeColumn("cube", "cardId");
    await queryInterface.removeColumn("cubes", "deckId");
    await queryInterface.removeColumn("cubes", "roundId");
    await queryInterface.removeColumn("cards", "deckId");
    await queryInterface.removeColumn("cards", "cubeId");
    await queryInterface.removeColumn("rounds", "playerId");
    await queryInterface.removeColumn("rounds", "deckId");
    await queryInterface.removeColumn("rounds", "matchId");
    await queryInterface.removeColumn("rounds", "resultId");
    await queryInterface.removeColumn("matches", "gameId");
    await queryInterface.removeColumn("matches", "playerId");
    await queryInterface.removeColumn("matches", "deckId");
    await queryInterface.removeColumn("matches", "resultId");
    await queryInterface.removeColumn("matches", "roundId");
    await queryInterface.removeColumn("games", "matchId");
    await queryInterface.removeColumn("games", "resultId");
    await queryInterface.removeColumn("results", "gameId");
    await queryInterface.removeColumn("results", "matchId");
    await queryInterface.removeColumn("results", "roundId");
  },
};
