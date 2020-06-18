"use strict";
module.exports = (sequelize, DataTypes) => {
  const round = sequelize.define(
    "round",
    {
      date: DataTypes.DATE,
      allowNull: false,
    },
    {}
  );
  round.associate = function (models) {
    round.hasMany(models.deck);
    round.hasMany(models.player);
    round.hasMany(models.match);
    round.hasMany(models.result);
  };
  return round;
};
