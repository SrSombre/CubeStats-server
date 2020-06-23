"use strict";
module.exports = (sequelize, DataTypes) => {
  const deckcardjoin = sequelize.define(
    "deckcardjoin",
    {
      date: DataTypes.DATE,
    },
    {}
  );
  deckcardjoin.associate = function (models) {
    deckcardjoin.hasOne(models.deck, {
      foreignKey: "deckId",
    });
    deckcardjoin.hasOne(models.card, {
      foreignKey: "cardId",
    });
  };
  return deckcardjoin;
};
