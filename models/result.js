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
    result.belongsTo(models.game);
    result.belongsTo(models.match);
    result.belongsTo(models.round);
  };
  return result;
};
