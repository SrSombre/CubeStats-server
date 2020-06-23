"use strict";
module.exports = (sequelize, DataTypes) => {
  const deck = sequelize.define(
    "deck",
    {
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  deck.associate = function (models) {
    deck.belongsTo(models.player, {
      foreignKey: "playerId",
    });
    deck.hasMany(models.card, {
      foreignKey: "deckcards",
    });
    deck.hasMany(models.match, {
      foreignKey: "deckmatches",
    });
    deck.hasMany(models.round, {
      foreignKey: "deckrounds",
    });
    deck.belongsTo(models.cube, {
      foreignKey: "cubeId",
    });
  };
  return deck;
};
