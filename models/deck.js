"use strict";
module.exports = (sequelize, DataTypes) => {
  const deck = sequelize.define(
    "deck",
    {
      name: DataTypes.STRING,
      allowNull: false,
    },
    {}
  );
  deck.associate = function (models) {
    deck.belongsTo(models.player);
    deck.hasMany(models.card);
    deck.hasMany(models.match);
    deck.hasMany(models.round);
  };
  return deck;
};
