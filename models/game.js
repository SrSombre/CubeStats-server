"use strict";
module.exports = (sequelize, DataTypes) => {
  const game = sequelize.define(
    "game",
    {
      date: DataTypes.DATE,
      allowNull: false,
    },
    {}
  );
  game.associate = function (models) {
    game.belongsTo(models.result, {
      foreignKey: "gameresult",
    });
    game.belongsTo(models.match, {
      foreignKey: "gamematch",
    });
  };
  return game;
};
