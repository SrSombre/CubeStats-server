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
    deck.belongsTo(models.player);
    deck.belongsTo(models.cube);
    deck.belongsToMany(models.card, {
      through: "deckcardjoins",
      foreignKey: "deckId",
    });
  };
  return deck;
};
