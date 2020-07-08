const { Router } = require("express");
const { Sequelize } = require("../models");

const router = new Router();

const Player = require("../models").player;
const Deck = require("../models").deck;
const Card = require("../models").card;

router.get("/:userId/stats/", async (req, res) => {
  const playerDecks = await Deck.findAndCountAll({
    where: { playerId: req.params.userId },
    include: { model: Card },
  });

  const decksWithStats = playerDecks.rows.map((deck) => {
    const stats = deck.cards.reduce(
      (acc, card) => {
        const cardColor = card.colors;
        acc[cardColor] = acc[cardColor] + 1;
        return acc;
      },
      { "{W}": 0, "{U}": 0, "{B}": 0, "{R}": 0, "{G}": 0 }
    );
    return { deck, stats };
  });

  console.log(decksWithStats);
  res.send(playerDecks);
});

module.exports = router;
