"use strict";
module.exports = (sequelize, DataTypes) => {
  const match = sequelize.define(
    "match",
    {
      date: DataTypes.DATE,
      allowNull: false,
    },
    {}
  );
  match.associate = function (models) {
    match.hasMany(models.game);
    match.belongsTo(models.round);
    match.hasMany(models.player);
    match.hasMany(models.deck);
    match.hasMany(models.result);
  };
  return match;
};
