"use strict";
module.exports = (sequelize, DataTypes) => {
  const card = sequelize.define(
    "card",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      colors: { type: DataTypes.STRING, allowNull: true },
      type: { type: DataTypes.STRING, allowNull: false },
      cmc: { type: DataTypes.INTEGER, allowNull: true },
      image: { type: DataTypes.STRING, allowNull: false },
      setName: { type: DataTypes.STRING, allowNull: false },
      rarity: { type: DataTypes.STRING, allowNull: false },
      power: { type: DataTypes.INTEGER, allowNull: true },
      toughness: { type: DataTypes.INTEGER, allowNull: true },
      multiverse_id: { type: DataTypes.INTEGER, allowNull: false },
      rulings_uri: { type: DataTypes.STRING, allowNull: false },
      scryfall_uri: { type: DataTypes.STRING, allowNull: false },
      keywords: { type: DataTypes.STRING, allowNull: true },
    },
    {}
  );
  card.associate = function (models) {
    card.belongsToMany(models.cube, {
      through: "cubecardjoins",
      foreignKey: "cardId",
    });
    card.belongsToMany(models.deck, {
      through: "deckcardjoins",
      foreignKey: "cardId",
    });
  };
  return card;
};
