const { Router } = require("express");

const Card = require("../models").card;
const Deck = require("../models").deck;
const Cube = require("../models").cube;
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const cards = await Card.findAll();
    res.send(cards);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const card = await Card.findByPk(id);
    res.send(card);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
