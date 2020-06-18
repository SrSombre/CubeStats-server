"use strict";
module.exports = (sequelize, DataTypes) => {
  const cube = sequelize.define(
    "cube",
    {
      name: DataTypes.STRING,
      allowNull: false,
    },
    {}
  );
  cube.associate = function (models) {
    cube.hasMany(models.card);
    cube.hasMany(models.deck);
    cube.hasMany(models.round);
  };
  return cube;
};
