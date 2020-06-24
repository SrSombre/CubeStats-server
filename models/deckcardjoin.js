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
    deckcardjoin.belongsTo(models.deck);
    deckcardjoin.belongsTo(models.card);
  };
  return deckcardjoin;
};
