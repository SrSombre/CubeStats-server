const { Router } = require("express");

const Card = require("../models").card;
const Deck = require("../models").deck;
const Cube = require("../models").cube;
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const decks = await Deck.findAll({
      include: [Card],
    });
    res.send(decks);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deck = await Deck.findByPk(id, {
      include: [Card],
    });
    res.send(deck);
  } catch (e) {
    next(e);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const deck = await Deck.create({ id, name });
    res.send(deck);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
