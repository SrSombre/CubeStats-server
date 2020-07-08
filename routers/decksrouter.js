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
        const cardColor = card.colors; //"{W}"
        acc[cardColor] = acc[cardColor] + 1;
        return acc;
      },
      { "{W}": 0, "{U}": 0, "{B}": 0, "{R}": 0, "{G}": 0 }
    );
    return { deck, stats };
  });
  res.send(decksWithStats);
});

// router.get("/user/:userId", authMiddleware, async (req, res) => {
//   // const playerId = req.player.dataValues["id"];
//   const playerDecks = await Deck.findAndCountAll({
//     where: { playerId: playerId },
//     include: { model: Card },
//   });

//   const decksWithStats = playerDecks.rows.map((deck) => {
//     const stats = deck.cards.reduce(
//       (acc, card) => {
//         const cardColor = card.colors; //"{W}"
//         acc[cardColor] = acc[cardColor] + 1;
//         return acc;
//       },
//       { "{W}": 0, "{U}": 0, "{B}": 0, "{R}": 0, "{G}": 0 }
//     );
//     return { deck, stats };
//   });

//   console.log(decksWithStats);
//   console.log(playerDecks);
//   res.send(decksWithStats);
// });

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
