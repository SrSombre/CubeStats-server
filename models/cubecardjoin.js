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
    cubecardjoin.belongsTo(models.card);
    cubecardjoin.belongsTo(models.cube);
  };
  return cubecardjoin;
};
