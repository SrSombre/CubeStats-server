"use strict";
module.exports = (sequelize, DataTypes) => {
  const cube = sequelize.define(
    "cube",
    {
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  cube.associate = function (models) {};
  return cube;
};
