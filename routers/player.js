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
  const stats = playerDecks.rows.reduce((deckStatsAll, deck) => {
    console.log(deck);
    const deckColors = deck.cards.reduce(
      (deckStats, card) => {
        console.log(card);
        if (card.colors === "{W}" || card.colors === "{U}") {
          deckStats[card.colors] = deckStats[card.colors] + 1;
        }
        return deckStats;
      },
      {
        "{W}": 0,
        "{U}": 0,
      }
    );
    console.log(deckColors);
  });
  console.log(playerDecks);
  res.send(playerDecks);
});

module.exports = router;
