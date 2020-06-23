"use strict";
module.exports = (sequelize, DataTypes) => {
  const deck = sequelize.define(
    "deck",
    {
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  deck.associate = function (models) {};
  return deck;
};
