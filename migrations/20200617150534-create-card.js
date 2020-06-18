"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("cards", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      colors: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cmc: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      setName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      rarity: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      power: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      toughness: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      multiverse_id: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      rulings_uri: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      scryfall_uri: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      keywords: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("cards");
  },
};
