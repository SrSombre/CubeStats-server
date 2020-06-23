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
    cubedeckjoin.hasOne(models.deck, {
      foreignKey: "deckId",
    });
    cubedeckjoin.hasOne(models.cube, {
      foreignKey: "cubeId",
    });
  };
  return cubedeckjoin;
};
