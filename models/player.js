"use strict";
module.exports = (sequelize, DataTypes) => {
  const player = sequelize.define(
    "player",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  player.associate = function (models) {
    player.belongsToMany(models.deck, {
      through: "playerdeckjoins",
      foreignKey: "playerId",
    });
  };

  return player;
};
