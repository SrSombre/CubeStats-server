"use strict";
module.exports = (sequelize, DataTypes) => {
  const playerdeckjoin = sequelize.define(
    "playerdeckjoin",
    {
      date: DataTypes.DATE,
    },
    {}
  );
  playerdeckjoin.associate = function (models) {
    playerdeckjoin.hasOne(models.deck, {
      foreignKey: "deckId",
    });
    playerdeckjoin.hasOne(models.player, {
      foreignKey: "playerId",
    });
  };
  return playerdeckjoin;
};
