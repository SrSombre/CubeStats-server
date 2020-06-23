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
    round.hasMany(models.deck, {
      foreignKey: "rounddecks",
    });
    round.hasMany(models.player, {
      foreignKey: "roundplayers",
    });
    round.hasMany(models.match, {
      foreignKey: "roundmatches",
    });
    round.hasMany(models.result, {
      foreignKey: "roundresults",
    });
    round.belongsTo(models.cube, {
      foreignKey: "cubeId",
    });
  };
  return round;
};
