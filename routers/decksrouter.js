const { Router } = require("express");

const Card = require("../models").card;
const Deck = require("../models").deck;
const Cube = require("../models").cube;
const Deckcardjoin = require("../models").deckcardjoin;
const { SALT_ROUNDS } = require("../config/constants");
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", authMiddleware, async (req, res) => {
  const playerDecks = await Deck.findAndCountAll({
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

    const cmc = deck.cards.reduce(
      (acc, card) => {
        const cardCMC = card.cmc.toString();
        acc[cardCMC] = acc[cardCMC] + 1;
        return acc;
      },
      {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
      }
    );

    const myTypes = [
      "artifact",
      "creature",
      "land",
      "enchantment",
      "planeswalker",
      "sorcery",
      "instant",
    ];
    const initialAcc = myTypes.reduce((o, key) => ({ ...o, [key]: 0 }), {});

    const type = deck.cards.reduce((acc, card) => {
      const typeToString = card.type.toLowerCase();
      console.log(typeToString);

      myTypes.forEach((type) => {
        if (typeToString.includes(type)) {
          acc[type] = acc[type] + 1;
        }
      });

      return acc;
    }, initialAcc);

    return { deck, stats, cmc, type };
  });
  res.send(decksWithStats);
});

router.get("/user/:userId", authMiddleware, async (req, res) => {
  const playerId = req.player.dataValues["id"];
  const playerDecks = await Deck.findAndCountAll({
    where: { playerId: playerId },
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
    const cmc = deck.cards.reduce(
      (acc, card) => {
        const cardCMC = card.cmc.toString();
        acc[cardCMC] = acc[cardCMC] + 1;
        return acc;
      },
      {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
      }
    );

    const myTypes = [
      "artifact",
      "creature",
      "land",
      "enchantment",
      "planeswalker",
      "sorcery",
      "instant",
    ];
    const initialAcc = myTypes.reduce((o, key) => ({ ...o, [key]: 0 }), {});

    const type = deck.cards.reduce((acc, card) => {
      const typeToString = card.type.toLowerCase();
      console.log(typeToString);

      myTypes.forEach((type) => {
        if (typeToString.includes(type)) {
          acc[type] = acc[type] + 1;
        }
      });

      return acc;
    }, initialAcc);

    return { deck, stats, cmc, type };
  });

  console.log(decksWithStats);
  console.log(playerDecks);
  res.send(decksWithStats);
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

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const { name } = req.body;

    const cubeId = 1;
    const playerId = req.player.dataValues["id"];
    const newDeck = await Deck.create({ name, playerId, cubeId });

    const cardsToInsert = req.body.cardIds.map((cardId) => ({
      cardId,
      deckId: newDeck.id,
    }));
    const newJoin = await Deckcardjoin.bulkCreate(cardsToInsert);
    res.send(newJoin);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
