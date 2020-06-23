"use strict";
module.exports = (sequelize, DataTypes) => {
  const cubecardjoin = sequelize.define(
    "cubecardjoin",
    {
      date: DataTypes.DATE,
    },
    {}
  );
  cubecardjoin.associate = function (models) {
    cubecardjoin.hasOne(models.card, {
      foreignKey: "cardId",
    });
    cubecardjoin.hasOne(models.cube, {
      foreignKey: "cubeId",
    });
  };
  return cubecardjoin;
};
