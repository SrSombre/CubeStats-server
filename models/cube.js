"use strict";
module.exports = (sequelize, DataTypes) => {
  const cube = sequelize.define(
    "cube",
    {
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  cube.associate = function (models) {
    cube.hasMany(models.card, {
      foreignKey: "cubecards",
    });
    cube.hasMany(models.deck, {
      foreignKey: "cubedecks",
    });
    cube.hasMany(models.round, {
      foreignKey: "cuberounds",
    });
  };
  return cube;
};
