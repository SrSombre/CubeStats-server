"use strict";
module.exports = (sequelize, DataTypes) => {
  const playerDeck = sequelize.define(
    "playerDeck",
    {
      date: DataTypes.DATE,
    },
    {}
  );
  playerDeck.associate = function (models) {
    playerDeck.belongsTo(models.player, {
      foreignKey: "playerId",
    });
    playerDeck.hasMany(models.card, {
      foreignKey: "cardId",
    });
    playerDeck.belongsTo(models.deck, {
      foreignKey: "deckId",
    });
    playerDeck.belongsTo(models.cube, {
      foreignKey: "cubeId",
    });
  };
  return playerDeck;
};
