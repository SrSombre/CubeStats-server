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
    cube.belongsToMany(models.deck, {
      through: "cubedeckjoins",
      foreignKey: "cubeId",
    });
    cube.belongsToMany(models.card, {
      through: "cubecardjoins",
      foreignKey: "cubeId",
    });
  };
  return cube;
};
