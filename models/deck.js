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
    deck.belongsToMany(models.player, {
      through: "playerdeckjoins",
      foreignKey: "deckId",
    });
    deck.belongsToMany(models.cube, {
      through: "cubedeckjoins",
      foreignKey: "deckId",
    });
    deck.belongsToMany(models.card, {
      through: "deckcardjoins",
      foreignKey: "deckId",
    });
  };
  return deck;
};
