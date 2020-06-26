"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "cards",
      [
        {
          name: "Ancestral Recall",
          colors: ["U"],
          type: "Instant",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/2/3/2398892d-28e9-4009-81ec-0d544af79d2b.jpg?1562902119",
          setName: "Vintage Masters",
          rarity: "mythic",
          power: null,
          toughness: null,
          multiverse_id: 382841,
          rulings_uri:
            "https://api.scryfall.com/cards/2398892d-28e9-4009-81ec-0d544af79d2b/rulings",
          scryfall_uri:
            "https://scryfall.com/card/vma/1/ancestral-recall?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lightning Bolt",
          colors: ["R"],
          type: "Instant",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/e/3/e3285e6b-3e79-4d7c-bf96-d920f973b122.jpg?1562442158",
          setName: "Masters 25",
          rarity: "uncommon",
          power: null,
          toughness: null,
          multiverse_id: 442130,
          rulings_uri:
            "https://api.scryfall.com/cards/e3285e6b-3e79-4d7c-bf96-d920f973b122/rulings",
          scryfall_uri:
            "https://scryfall.com/card/a25/141/lightning-bolt?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dark Ritual",
          colors: ["B"],
          type: "Instant",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/9/5/95f27eeb-6f14-4db3-adb9-9be5ed76b34b.jpg?1562438559",
          setName: "Masters 25",
          rarity: "common",
          power: null,
          toughness: null,
          multiverse_id: 442071,
          rulings_uri:
            "https://api.scryfall.com/cards/e3285e6b-3e79-4d7c-bf96-d920f973b122/rulings",
          scryfall_uri:
            "https://scryfall.com/card/a25/82/dark-ritual?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Giant Growth",
          colors: ["G"],
          type: "Instant",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/0/6/06ec9e8b-4bd8-4caf-a559-6514b7ab4ca4.jpg?1557576917",
          setName: "War of the Spark",
          rarity: "common",
          power: null,
          toughness: null,
          multiverse_id: 461089,
          rulings_uri:
            "https://api.scryfall.com/cards/06ec9e8b-4bd8-4caf-a559-6514b7ab4ca4/rulings",
          scryfall_uri:
            "https://scryfall.com/card/war/162/giant-growth?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Healing Salve",
          colors: ["W"],
          type: "Instant",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/0/f/0ff82aba-9022-4eff-a6dc-67365360d646.jpg?1561771079",
          setName: "Duel Decks Anthology: Divine vs. Demonic",
          rarity: "common",
          power: null,
          toughness: null,
          multiverse_id: 394031,
          rulings_uri:
            "https://api.scryfall.com/cards/06ec9e8b-4bd8-4caf-a559-6514b7ab4ca4/rulings",
          scryfall_uri:
            "https://scryfall.com/card/dvd/14/healing-salve?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("cards", null, {});
  },
};
