"use strict";
module.exports = (sequelize, DataTypes) => {
  const result = sequelize.define(
    "result",
    {
      date: DataTypes.DATE,
      allowNull: false,
    },
    {}
  );
  result.associate = function (models) {
    result.belongsTo(models.game, {
      foreignKey: "gameresults",
    });
    result.belongsTo(models.match, {
      foreignKey: "matchresults",
    });
    result.belongsTo(models.round, {
      foreignKey: "roundresults",
    });
  };
  return result;
};
