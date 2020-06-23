"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("players", "playerdecks", {
      type: Sequelize.INTEGER,
      references: {
        model: "decks",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("players", "playermatches", {
      type: Sequelize.INTEGER,
      references: {
        model: "matches",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("players", "playerrounds", {
      type: Sequelize.INTEGER,
      references: {
        model: "rounds",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("decks", "deckcards", {
      type: Sequelize.INTEGER,
      references: {
        model: "cards",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("decks", "deckmatches", {
      type: Sequelize.INTEGER,
      references: {
        model: "matches",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("decks", "playerId", {
      type: Sequelize.INTEGER,
      references: {
        model: "players",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("decks", "deckrounds", {
      type: Sequelize.INTEGER,
      references: {
        model: "rounds",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("decks", "cubeId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cubes",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("playerDecks", "playerId", {
      type: Sequelize.INTEGER,
      references: {
        model: "players",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("playerDecks", "cardId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cards",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("playerDecks", "deckId", {
      type: Sequelize.INTEGER,
      references: {
        model: "decks",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("playerDecks", "cubeId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cubes",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("cubes", "cubecards", {
      type: Sequelize.INTEGER,
      references: {
        model: "cards",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("cubes", "cubedecks", {
      type: Sequelize.INTEGER,
      references: {
        model: "decks",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("cubes", "cuberounds", {
      type: Sequelize.INTEGER,
      references: {
        model: "rounds",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("cards", "deckId", {
      type: Sequelize.INTEGER,
      references: {
        model: "decks",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("cards", "cubeId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cubes",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("rounds", "roundplayers", {
      type: Sequelize.INTEGER,
      references: {
        model: "players",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("rounds", "rounddecks", {
      type: Sequelize.INTEGER,
      references: {
        model: "decks",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("rounds", "roundmatches", {
      type: Sequelize.INTEGER,
      references: {
        model: "matches",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("rounds", "roundresults", {
      type: Sequelize.INTEGER,
      references: {
        model: "results",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("rounds", "cubeId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cubes",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("matches", "matchgame", {
      type: Sequelize.INTEGER,
      references: {
        model: "games",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("matches", "matchplayers", {
      type: Sequelize.INTEGER,
      references: {
        model: "players",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("matches", "matchdecks", {
      type: Sequelize.INTEGER,
      references: {
        model: "decks",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("matches", "matchresults", {
      type: Sequelize.INTEGER,
      references: {
        model: "results",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("matches", "matchround", {
      type: Sequelize.INTEGER,
      references: {
        model: "rounds",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("games", "gamematch", {
      type: Sequelize.INTEGER,
      references: {
        model: "matches",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("games", "gameresult", {
      type: Sequelize.INTEGER,
      references: {
        model: "results",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("results", "gameresults", {
      type: Sequelize.INTEGER,
      references: {
        model: "games",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("results", "matchresults", {
      type: Sequelize.INTEGER,
      references: {
        model: "matches",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("results", "roundresults", {
      type: Sequelize.INTEGER,
      references: {
        model: "rounds",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("players", "playerdecks");
    await queryInterface.removeColumn("players", "playermatches");
    await queryInterface.removeColumn("players", "playerrounds");
    await queryInterface.removeColumn("decks", "deckcards");
    await queryInterface.removeColumn("decks", "deckmatches");
    await queryInterface.removeColumn("decks", "playerId");
    await queryInterface.removeColumn("decks", "deckrounds");
    await queryInterface.removeColumn("decks", "cubeId");
    await queryInterface.removeColumn("playerDecks", "playerId");
    await queryInterface.removeColumn("playerDecks", "cardId");
    await queryInterface.removeColumn("playerDecks", "deckId");
    await queryInterface.removeColumn("playerDecks", "cubeId");
    await queryInterface.removeColumn("cube", "cubecards");
    await queryInterface.removeColumn("cubes", "cubedecks");
    await queryInterface.removeColumn("cubes", "cuberounds");
    await queryInterface.removeColumn("cards", "deckId");
    await queryInterface.removeColumn("cards", "cubeId");
    await queryInterface.removeColumn("rounds", "roundplayers");
    await queryInterface.removeColumn("rounds", "cubeId");
    await queryInterface.removeColumn("rounds", "rounddecks");
    await queryInterface.removeColumn("rounds", "roundmatches");
    await queryInterface.removeColumn("rounds", "roundresults");
    await queryInterface.removeColumn("matches", "matchgame");
    await queryInterface.removeColumn("matches", "matchplayers");
    await queryInterface.removeColumn("matches", "matchdecks");
    await queryInterface.removeColumn("matches", "matchresults");
    await queryInterface.removeColumn("matches", "matchround");
    await queryInterface.removeColumn("games", "gamematch");
    await queryInterface.removeColumn("games", "gameresult");
    await queryInterface.removeColumn("results", "gameresults");
    await queryInterface.removeColumn("results", "matchresults");
    await queryInterface.removeColumn("results", "roundresults");
  },
};
