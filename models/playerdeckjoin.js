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
    playerdeckjoin.belongsTo(models.deck);
    playerdeckjoin.belongsTo(models.player);
  };
  return playerdeckjoin;
};
