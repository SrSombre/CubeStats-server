"use strict";
module.exports = (sequelize, DataTypes) => {
  const cubedeckjoin = sequelize.define(
    "cubedeckjoin",
    {
      date: DataTypes.DATE,
    },
    {}
  );
  cubedeckjoin.associate = function (models) {
    cubedeckjoin.belongsTo(models.deck);
    cubedeckjoin.belongsTo(models.cube);
  };
  return cubedeckjoin;
};
