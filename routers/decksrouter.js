const { Router } = require("express");

const Card = require("../models").card;
const Deck = require("../models").deck;
const Cube = require("../models").cube;
const Deckcardjoin = require("../models").deckcardjoin;
const { SALT_ROUNDS } = require("../config/constants");
const authMiddleware = require("../auth/middleware");

const router = new Router();

// router.get("/", authMiddleware, async (req, res) => {
//   const playerDecks = await Deck.findAndCountAll({
//     include: { model: Card },
//   });

//   const decksWithStats = playerDecks.rows.map((deck) => {
//     const stats = deck.cards.reduce(
//       (acc, card) => {
//         const cardColor = card.colors;
//         acc[cardColor] = acc[cardColor] + 1;
//         return acc;
//       },
//       { "{W}": 0, "{U}": 0, "{B}": 0, "{R}": 0, "{G}": 0 }
//     );
//     return { deck, stats };
//   });
//   res.send(decksWithStats);
// });

// GET MODEL CUBE, INCLUDE DECKS, INCLUDE CARDS -> MAP CUBE -> COUNT CARDS. ??

// router.get("/cube", async (req, res) => {
//   const playerDecks = await Deck.findAndCountAll({
//     include: { model: Card },
//   });

//   const decksWithStats = playerDecks.rows.map((deck) => {
//     return deck.cards;
//   });
//   res.send(decksWithStats);
// });

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

    const type = deck.cards.reduce(
      (acc, card) => {
        const typeToString = card.type.toLowerCase();
        console.log("TTS", typeToString);

        // if (typeToString.includes("ARTIFACT")) {
        //   acc[artifact] = acc[artifact] + 1;
        // }
        // if (typeToString.includes("CREATURE")) {
        //   acc[creature] = acc[creature] + 1;
        // }
        // if (typeToString.includes("LAND")) {
        //   acc[land] = acc[land] + 1;
        // }
        // if (typeToString.includes("ENCHANTMENT")) {
        //   acc[enchantment] = acc[enchantment] + 1;
        // }
        // if (typeToString.includes("PLANESWALKER")) {
        //   acc[planeswalker] = acc[planeswalker] + 1;
        // }
        // if (typeToString.includes("SORCERY")) {
        //   acc[sorcery] = acc[sorcery] + 1;
        // }
        // if (typeToString.includes("INSTANT")) {
        //   acc[instant] = acc[instant] + 1;
        // }

        const artifact = typeToString.includes("artifact");
        const creature = typeToString.includes("creature");
        const land = typeToString.includes("land");
        const enchantment = typeToString.includes("enchantment");
        const planeswalker = typeToString.includes("planeswalker");
        const sorcery = typeToString.includes("sorcery");
        const instant = typeToString.includes("instant");

        acc[creature] = acc[creature] + 1;
        acc[land] = acc[land] + 1;
        acc[artifact] = acc[artifact] + 1;
        acc[enchantment] = acc[enchantment] + 1;
        acc[planeswalker] = acc[planeswalker] + 1;
        acc[sorcery] = acc[sorcery] + 1;
        acc[instant] = acc[instant] + 1;
        return acc;
      },
      {
        artifact: 0,
        creature: 0,
        land: 0,
        enchantment: 0,
        planeswalker: 0,
        sorcery: 0,
        instant: 0,
        true: 0,
        false: 0,
      }
    );

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
    return { deck, stats, cmc };
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

//UPDATE EXISTING

// router.post(
//   "/:deckId/cards/:cardId",
//   authMiddleware,
//   async (req, res, next) => {
//     try {
//       const { name } = req.body;
//       const cubeId = 1;
//       const { deckId, cardId } = req.params;
//       const playerId = req.player.dataValues["id"];

//       const deck = await Deck.findOrCreate({
//         where: {
//           id: deckId,
//         },
//         defaults: {
//           name,
//           cubeId,
//           playerId,
//         },
//       });

//       const newJoin = await Deckcardjoin.create({
//         deckId: deck.id,
//         cardId: cardId,
//       });

//       res.send(deck, newJoin);
//     } catch (e) {
//       next(e);
//     }
//   }
// );

module.exports = router;
