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
    match.hasMany(models.game, {
      foreignKey: "matchgame",
    });

    match.belongsTo(models.round, {
      foreignKey: "matchround",
    });

    match.hasMany(models.player, {
      foreignKey: "matchplayers",
    });
    match.hasMany(models.deck, {
      foreignKey: "matchdecks",
    });
    match.hasMany(models.result, {
      foreignKey: "matchresults",
    });
  };
  return match;
};
