"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "cards",
      [
        {
          name: "Giver of Runes",
          colors: "{W}",
          type: "Creature",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/4/e/4e117771-5a8b-4812-b487-32ba34b7f724.jpg?1562201124",
          setName: "Modern Horizons",
          rarity: "rare",
          power: 1,
          toughness: 2,
          multiverse_id: 463962,
          rulings_uri:
            "https://api.scryfall.com/cards/4e117771-5a8b-4812-b487-32ba34b7f724/rulings",
          scryfall_uri:
            "https://scryfall.com/card/mh1/13/giver-of-runes?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Isamaru, Hound of Konda",
          colors: "{W}",
          type: "Creature",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/2/e/2e7f9919-0713-4ef9-96eb-3e0c444e47f4.jpg?1562758884",
          setName: "Champions of Kamigawa",
          rarity: "rare",
          power: 2,
          toughness: 2,
          multiverse_id: 79217,
          rulings_uri:
            "https://api.scryfall.com/cards/2e7f9919-0713-4ef9-96eb-3e0c444e47f4/rulings",
          scryfall_uri:
            "https://scryfall.com/card/chk/19/isamaru-hound-of-konda?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kytheon, Hero of Akros",
          colors: "{W}",
          type: "Creature",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/5/8/58c39df6-b237-40d1-bdcb-2fe5d05392a9.jpg?1562021001",
          setName: "Magic Origins",
          rarity: "mythic",
          power: 2,
          toughness: 1,
          multiverse_id: 398428,
          rulings_uri:
            "https://api.scryfall.com/cards/58c39df6-b237-40d1-bdcb-2fe5d05392a9/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ori/23/kytheon-hero-of-akros-gideon-battle-forged?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mother of Runes",
          colors: "{W}",
          type: "Creature",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/6/2/62d898e8-0b85-43eb-ae62-d33147135513.jpg?1592672400",
          setName: "Commander Anthology",
          rarity: "uncommon",
          power: 1,
          toughness: 1,
          multiverse_id: 430236,
          rulings_uri:
            "https://api.scryfall.com/cards/62d898e8-0b85-43eb-ae62-d33147135513/rulings",
          scryfall_uri:
            "https://scryfall.com/card/cma/17/mother-of-runes?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Skymarcher Aspirant",
          colors: "{W}",
          type: "Creature",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/9/4/9473190f-5e96-4cf7-a0fa-a77d916acc2e.jpg?1555039784",
          setName: "Rivals of Ixalan",
          rarity: "uncommon",
          power: 2,
          toughness: 1,
          multiverse_id: 439678,
          rulings_uri:
            "https://api.scryfall.com/cards/9473190f-5e96-4cf7-a0fa-a77d916acc2e/rulings",
          scryfall_uri:
            "https://scryfall.com/card/rix/21/skymarcher-aspirant?utm_source=api",
          keywords: "Ascend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Soldier of the Pantheon",
          colors: "{W}",
          type: "Creature",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/5/c/5cfc0f46-4df4-4ae3-bfe6-391916eb590f.jpg?1562818721",
          setName: "Rivals of Ixalan",
          rarity: "rare",
          power: 2,
          toughness: 1,
          multiverse_id: 373529,
          rulings_uri:
            "https://api.scryfall.com/cards/9473190f-5e96-4cf7-a0fa-a77d916acc2e/rulings",
          scryfall_uri:
            "https://scryfall.com/card/rix/21/skymarcher-aspirant?utm_source=api",
          keywords: "Protection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Adanto Vanguard",
          colors: "{W}",
          type: "Creature",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/2/1/21c950d7-b4f6-4902-8c9a-98f2933f9fa5.jpg?1562552020",
          setName: "Rivals of Ixalan",
          rarity: "rare",
          power: 1,
          toughness: 1,
          multiverse_id: 373529,
          rulings_uri:
            "https://api.scryfall.com/cards/21c950d7-b4f6-4902-8c9a-98f2933f9fa5/rulings",
          scryfall_uri:
            "https://scryfall.com/card/xln/1/adanto-vanguard?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Imposing Sovereign",
          colors: "{W}",
          type: "Creature",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/0/f/0f672328-3361-498e-a9f4-2d8e69a8b072.jpg?1562826053",
          setName: "Magic 2014",
          rarity: "rare",
          power: 2,
          toughness: 1,
          multiverse_id: 370770,
          rulings_uri:
            "https://api.scryfall.com/cards/21c950d7-b4f6-4902-8c9a-98f2933f9fa5/rulings",
          scryfall_uri:
            "https://scryfall.com/card/xln/1/adanto-vanguard?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Knight of the Kitchen Sink",
          colors: "{W}",
          type: "Creature",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/3/9/39c98931-cad7-4cea-97eb-f5e233ab2b36.jpg?1562907087",
          setName: "Unstable",
          rarity: "uncommon",
          power: 2,
          toughness: 2,
          multiverse_id: 439401,
          rulings_uri:
            "https://api.scryfall.com/cards/39c98931-cad7-4cea-97eb-f5e233ab2b36/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ust/12a/knight-of-the-kitchen-sink?utm_source=api",
          keywords: "First strike, Protection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Remorseful Cleric",
          colors: "{W}",
          type: "Creature",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/9/6/9620716d-9be8-4ebd-80d2-679373f4f897.jpg?1562303351",
          setName: "Core Set 2019",
          rarity: "rare",
          power: 2,
          toughness: 1,
          multiverse_id: 447169,
          rulings_uri:
            "https://api.scryfall.com/cards/9620716d-9be8-4ebd-80d2-679373f4f897/rulings",
          scryfall_uri:
            "https://scryfall.com/card/m19/33/remorseful-cleric?utm_source=api",
          keywords: "Flying",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Selfless Spirit",
          colors: "{W}",
          type: "Creature",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/a/4/a4624976-3773-4a1e-b725-5f6efce147a5.jpg?1576383969",
          setName: "Core Set 2019",
          rarity: "rare",
          power: 2,
          toughness: 1,
          multiverse_id: 414332,
          rulings_uri:
            "https://api.scryfall.com/cards/9620716d-9be8-4ebd-80d2-679373f4f897/rulings",
          scryfall_uri:
            "https://scryfall.com/card/emn/40/selfless-spirit?utm_source=api",
          keywords: "Flying",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Stoneforge Mystic",
          colors: "{W}",
          type: "Creature",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/1/9/19557351-b65f-4b04-b971-66abdc07000a.jpg?1566819710",
          setName: "Worldwake",
          rarity: "rare",
          power: 1,
          toughness: 2,
          multiverse_id: 198383,
          rulings_uri:
            "https://api.scryfall.com/cards/19557351-b65f-4b04-b971-66abdc07000a/rulings",
          scryfall_uri:
            "https://scryfall.com/card/wwk/20/stoneforge-mystic?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thalia, Guardian of Thraben",
          colors: "{W}",
          type: "Creature",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/9/7/97ff44c9-6ff5-432d-9876-488c96833c39.jpg?1562438581",
          setName: "Masters 25",
          rarity: "rare",
          power: 2,
          toughness: 1,
          multiverse_id: 442025,
          rulings_uri:
            "https://api.scryfall.com/cards/97ff44c9-6ff5-432d-9876-488c96833c39/rulings",
          scryfall_uri:
            "https://scryfall.com/card/a25/36/thalia-guardian-of-thraben?utm_source=api",
          keywords: "First strike",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wall of Omens",
          colors: "{W}",
          type: "Creature",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/f/5/f5c2aad9-1dc4-4e33-a630-9b828de1ed20.jpg?1580013846",
          setName: "Eternal Masters",
          rarity: "rare",
          power: 0,
          toughness: 4,
          multiverse_id: 413576,
          rulings_uri:
            "https://api.scryfall.com/cards/f5c2aad9-1dc4-4e33-a630-9b828de1ed20/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ema/34/wall-of-omens?utm_source=api",
          keywords: "Defender",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blade Splicer",
          colors: "{W}",
          type: "Creature",
          cmc: 3,
          image:
            "https://img.scryfall.com/cards/small/front/9/d/9d53b9ef-fedc-4471-ac90-018d7033a9fc.jpg?1561766543",
          setName: "Modern Masters 2017",
          rarity: "rare",
          power: 1,
          toughness: 1,
          multiverse_id: 425828,
          rulings_uri:
            "https://api.scryfall.com/cards/9d53b9ef-fedc-4471-ac90-018d7033a9fc/rulings",
          scryfall_uri:
            "https://scryfall.com/card/mm3/3/blade-splicer?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brimaz, King of Oreskos",
          colors: "{W}",
          type: "Creature",
          cmc: 3,
          image:
            "https://img.scryfall.com/cards/small/front/f/5/f54eb705-6326-4bac-bf0e-68d42db7a270.jpg?1593091372",
          setName: "Born of the Gods",
          rarity: "rare",
          power: 3,
          toughness: 4,
          multiverse_id: 378377,
          rulings_uri:
            "https://api.scryfall.com/cards/f54eb705-6326-4bac-bf0e-68d42db7a270/rulings",
          scryfall_uri:
            "https://scryfall.com/card/bng/5/brimaz-king-of-oreskos?utm_source=api",
          keywords: "Vigilance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Monastery Mentor",
          colors: "{W}",
          type: "Creature",
          cmc: 3,
          image:
            "https://img.scryfall.com/cards/small/front/a/b/abcd0e32-2e6b-419b-9e8a-af38f2b48a66.jpg?1562828716",
          setName: "Fate Reforged",
          rarity: "mythic",
          power: 2,
          toughness: 2,
          multiverse_id: 391883,
          rulings_uri:
            "https://api.scryfall.com/cards/abcd0e32-2e6b-419b-9e8a-af38f2b48a66/rulings",
          scryfall_uri:
            "https://scryfall.com/card/frf/20/monastery-mentor?utm_source=api",
          keywords: "Prowess",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Recruiter of the Guard",
          colors: "{W}",
          type: "Creature",
          cmc: 3,
          image:
            "https://img.scryfall.com/cards/small/front/b/b/bb9ad57f-cca2-4717-a951-cbe3c7782efe.jpg?1576381637",
          setName: "Conspiracy: Take the Crown",
          rarity: "rare",
          power: 1,
          toughness: 1,
          multiverse_id: 416779,
          rulings_uri:
            "https://api.scryfall.com/cards/bb9ad57f-cca2-4717-a951-cbe3c7782efe/rulings",
          scryfall_uri:
            "https://scryfall.com/card/cn2/22/recruiter-of-the-guard?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thalia, Heretic Cathar",
          colors: "{W}",
          type: "Creature",
          cmc: 3,
          image:
            "https://img.scryfall.com/cards/small/front/a/b/ab0cee38-5e24-49d0-870c-22843ed4e101.jpg?1576384009",
          setName: "Eldritch Moon",
          rarity: "rare",
          power: 3,
          toughness: 2,
          multiverse_id: 414338,
          rulings_uri:
            "https://api.scryfall.com/cards/abcd0e32-2e6b-419b-9e8a-af38f2b48a66/rulings",
          scryfall_uri:
            "https://scryfall.com/card/emn/46/thalia-heretic-cathar?utm_source=api",
          keywords: "First strike",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hero of Bladehold",
          colors: "{W}",
          type: "Creature",
          cmc: 4,
          image:
            "https://img.scryfall.com/cards/small/front/8/a/8a3853ec-e307-46e0-96d7-0706b5c45c5e.jpg?1562612851",
          setName: "Mirrodin Besieged",
          rarity: "mythic",
          power: 3,
          toughness: 4,
          multiverse_id: 214064,
          rulings_uri:
            "https://api.scryfall.com/cards/8a3853ec-e307-46e0-96d7-0706b5c45c5e/rulings",
          scryfall_uri:
            "https://scryfall.com/card/mbs/8/hero-of-bladehold?utm_source=api",
          keywords: "Battle Cry",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Restoration Angel",
          colors: "{W}",
          type: "Creature",
          cmc: 4,
          image:
            "https://img.scryfall.com/cards/small/front/3/b/3b5233ff-03bc-4053-9b49-c4185c2de38d.jpg?1562847919",
          setName: "Iconic Masters",
          rarity: "rare",
          power: 3,
          toughness: 4,
          multiverse_id: 438594,
          rulings_uri:
            "https://api.scryfall.com/cards/3b5233ff-03bc-4053-9b49-c4185c2de38d/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ima/28/restoration-angel?utm_source=api",
          keywords: "Flying, Flash",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Angel of Invention",
          colors: "{W}",
          type: "Creature",
          cmc: 5,
          image:
            "https://img.scryfall.com/cards/small/front/f/3/f3920f7d-8559-40f8-95be-860c16bf7700.jpg?1576380724",
          setName: "Kaladesh",
          rarity: "mythic",
          power: 2,
          toughness: 1,
          multiverse_id: 417577,
          rulings_uri:
            "https://api.scryfall.com/cards/f3920f7d-8559-40f8-95be-860c16bf7700/rulings",
          scryfall_uri:
            "https://scryfall.com/card/kld/4/angel-of-invention?utm_source=api",
          keywords: "Flying, Lifelink, Vigilance, Fabricate",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Archangel Avacyn // Avacyn, the Purifier",
          colors: "{W}",
          type: "Creature",
          cmc: 5,
          image:
            "https://img.scryfall.com/cards/small/front/a/e/ae155ee2-008f-4dc6-82bf-476be7baa224.jpg?1576383667",
          setName: "Shadows over Innistrad",
          rarity: "mythic",
          power: 4,
          toughness: 4,
          multiverse_id: 409741,
          rulings_uri:
            "https://api.scryfall.com/cards/ae155ee2-008f-4dc6-82bf-476be7baa224/rulings",
          scryfall_uri:
            "https://scryfall.com/card/soi/5/archangel-avacyn-avacyn-the-purifier?utm_source=api",
          keywords: "Flying, Transform, Vigilance, Flash",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Karmic Guide",
          colors: "{W}",
          type: "Creature",
          cmc: 5,
          image:
            "https://img.scryfall.com/cards/small/front/b/0/b0768971-88ed-4166-aede-209654878e53.jpg?1592672375",
          setName: "Commander Anthology",
          rarity: "rare",
          power: 2,
          toughness: 2,
          multiverse_id: 430232,
          rulings_uri:
            "https://api.scryfall.com/cards/b0768971-88ed-4166-aede-209654878e53/rulings",
          scryfall_uri:
            "https://scryfall.com/card/cma/13/karmic-guide?utm_source=api",
          keywords: "Echo, Flying, Protection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Reveillark",
          colors: "{W}",
          type: "Creature",
          cmc: 5,
          image:
            "https://img.scryfall.com/cards/small/front/7/d/7db7e70c-ce79-4a52-b97b-f1bd46e0768c.jpg?1591320124",
          setName: "Commander 2020",
          rarity: "rare",
          power: 4,
          toughness: 3,
          multiverse_id: 482725,
          rulings_uri:
            "https://scryfall.com/card/c20/97/reveillark?utm_source=api",
          scryfall_uri:
            "https://scryfall.com/card/cma/13/karmic-guide?utm_source=api",
          keywords: "Flying, Evoke",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Elesh Norn, Grand Cenobite",
          colors: "{W}",
          type: "Creature",
          cmc: 7,
          image:
            "https://img.scryfall.com/cards/small/front/7/8/78c2bfef-06a5-4c7f-8283-ea3fb673b7a1.jpg?1562850573",
          setName: "Iconic Masters",
          rarity: "mythic",
          power: 4,
          toughness: 7,
          multiverse_id: 438584,
          rulings_uri:
            "https://api.scryfall.com/cards/78c2bfef-06a5-4c7f-8283-ea3fb673b7a1/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ima/18/elesh-norn-grand-cenobite?utm_source=api",
          keywords: "Vigilance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gideon Blackblade",
          colors: "{W}",
          type: "Planeswalker",
          cmc: 3,
          image:
            "https://img.scryfall.com/cards/small/front/3/9/39d51c5e-26cb-4276-a676-fabfef866248.jpg?1575031650",
          setName: "War of the Spark",
          rarity: "mythic",
          power: null,
          toughness: null,
          multiverse_id: 460940,
          rulings_uri:
            "https://api.scryfall.com/cards/39d51c5e-26cb-4276-a676-fabfef866248/rulings",
          scryfall_uri:
            "https://scryfall.com/card/war/13/gideon-blackblade?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Elspeth, Knight-Errant",
          colors: "{W}",
          type: "Planeswalker",
          cmc: 4,
          image:
            "https://img.scryfall.com/cards/small/front/7/4/746d56ef-7ac5-403b-bca3-1cd267de97df.jpg?1561967814",
          setName: "Modern Masters",
          rarity: "mythic",
          power: null,
          toughness: null,
          multiverse_id: 370551,
          rulings_uri:
            "https://api.scryfall.com/cards/746d56ef-7ac5-403b-bca3-1cd267de97df/rulings",
          scryfall_uri:
            "https://scryfall.com/card/mma/13/elspeth-knight-errant?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gideon, Ally of Zendikar",
          colors: "{W}",
          type: "Planeswalker",
          cmc: 4,
          image:
            "https://img.scryfall.com/cards/small/front/1/8/187e887c-c39d-4d25-a506-cdc95fc70316.jpg?1562900856",
          setName: "Battle for Zendikar",
          rarity: "mythic",
          power: null,
          toughness: null,
          multiverse_id: 401897,
          rulings_uri:
            "https://api.scryfall.com/cards/187e887c-c39d-4d25-a506-cdc95fc70316/rulings",
          scryfall_uri:
            "https://scryfall.com/card/bfz/29/gideon-ally-of-zendikar?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Serra the Benevolent",
          colors: "{W}",
          type: "Planeswalker",
          cmc: 4,
          image:
            "https://img.scryfall.com/cards/small/front/8/8/88bf4af9-4b14-43e7-9d50-0e6a895cece1.jpg?1591605156",
          setName: "Modern Horizons",
          rarity: "mythic",
          power: null,
          toughness: null,
          multiverse_id: 463975,
          rulings_uri:
            "https://api.scryfall.com/cards/88bf4af9-4b14-43e7-9d50-0e6a895cece1/rulings",
          scryfall_uri:
            "https://scryfall.com/card/mh1/26/serra-the-benevolent?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Elspeth, Sun's Champion",
          colors: "{W}",
          type: "Planeswalker",
          cmc: 6,
          image:
            "https://img.scryfall.com/cards/small/front/9/6/96f1d11a-084d-4de7-9ed4-33158113520c.jpg?1562840252",
          setName: "Modern Horizons",
          rarity: "mythic",
          power: null,
          toughness: null,
          multiverse_id: 394361,
          rulings_uri:
            "https://api.scryfall.com/cards/96f1d11a-084d-4de7-9ed4-33158113520c/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ddo/1/elspeth-suns-champion?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Enlightened Tutor",
          colors: "{W}",
          type: "Instant",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/0/c/0c9ebec9-3474-4062-9607-2e2a72f78299.jpg?1580013657",
          setName: "Eternal Masters",
          rarity: "rare",
          power: null,
          toughness: null,
          multiverse_id: 413551,
          rulings_uri:
            "https://api.scryfall.com/cards/0c9ebec9-3474-4062-9607-2e2a72f78299/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ema/9/enlightened-tutor?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mana Tithe",
          colors: "{W}",
          type: "Instant",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/7/d/7d48d622-f397-4f31-b1a5-0c23f60aa71c.jpg?1562575298",
          setName: "Planar Chaos",
          rarity: "common",
          power: null,
          toughness: null,
          multiverse_id: 122324,
          rulings_uri:
            "https://api.scryfall.com/cards/7d48d622-f397-4f31-b1a5-0c23f60aa71c/rulings",
          scryfall_uri:
            "https://scryfall.com/card/plc/25/mana-tithe?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Path to Exile",
          colors: "{W}",
          type: "Instant",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/1/6/163b80e5-52e9-4100-98f8-8ceea9295d49.jpg?1592672415",
          setName: "Commander Anthology",
          rarity: "uncommon",
          power: null,
          toughness: null,
          multiverse_id: 430238,
          rulings_uri:
            "https://api.scryfall.com/cards/7d48d622-f397-4f31-b1a5-0c23f60aa71c/rulings",
          scryfall_uri:
            "https://api.scryfall.com/cards/163b80e5-52e9-4100-98f8-8ceea9295d49/rulings",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Swords to Plowshares",
          colors: "{W}",
          type: "Instant",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/6/f/6ff9af62-1895-465a-b1f3-61f0d8318958.jpg?1562917388",
          setName: "Battlebond",
          rarity: "uncommon",
          power: null,
          toughness: null,
          multiverse_id: 446078,
          rulings_uri:
            "https://api.scryfall.com/cards/6ff9af62-1895-465a-b1f3-61f0d8318958/rulings",
          scryfall_uri:
            "https://scryfall.com/card/bbd/110/swords-to-plowshares?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Balance",
          colors: "{W}",
          type: "Sorcery",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/c/e/ce648aa3-098b-4af0-a433-fd290bc85904.jpg?1580013606",
          setName: "Eternal Masters",
          rarity: "mythic",
          power: null,
          toughness: null,
          multiverse_id: 413544,
          rulings_uri:
            "https://api.scryfall.com/cards/ce648aa3-098b-4af0-a433-fd290bc85904/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ema/2/balance?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Council's Judgment",
          colors: "{W}",
          type: "Sorcery",
          cmc: 3,
          image:
            "https://img.scryfall.com/cards/small/front/8/f/8f322eda-ad8c-49b1-8755-175d00784c92.jpg?1562923900",
          setName: "Vintage Masters",
          rarity: "rare",
          power: null,
          toughness: null,
          multiverse_id: 382896,
          rulings_uri:
            "https://api.scryfall.com/cards/8f322eda-ad8c-49b1-8755-175d00784c92/rulings",
          scryfall_uri:
            "https://scryfall.com/card/vma/20/councils-judgment?utm_source=api",
          keywords: "Will of the council",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lingering Souls",
          colors: "{W}, {B}",
          type: "Sorcery",
          cmc: 3,
          image:
            "https://img.scryfall.com/cards/small/front/b/c/bcf1288a-8e2c-4a69-afcf-af293f66d007.jpg?1561767966",
          setName: "Modern Masters 2017",
          rarity: "uncommon",
          power: null,
          toughness: null,
          multiverse_id: 425837,
          rulings_uri:
            "https://api.scryfall.com/cards/bcf1288a-8e2c-4a69-afcf-af293f66d007/rulings",
          scryfall_uri:
            "https://scryfall.com/card/mm3/12/lingering-souls?utm_source=api",
          keywords: "Flashback",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Armageddon",
          colors: "{W}",
          type: "Sorcery",
          cmc: 4,
          image:
            "https://img.scryfall.com/cards/small/front/7/7/77f1f6ac-983f-4f3e-8906-47f774e8367b.jpg?1582021719",
          setName: "Masters 25",
          rarity: "mythic",
          power: null,
          toughness: null,
          multiverse_id: 441994,
          rulings_uri:
            "https://api.scryfall.com/cards/77f1f6ac-983f-4f3e-8906-47f774e8367b/rulings",
          scryfall_uri:
            "https://scryfall.com/card/a25/5/armageddon?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Day of Judgment",
          colors: "{W}",
          type: "Sorcery",
          cmc: 4,
          image:
            "https://img.scryfall.com/cards/small/front/1/e/1ed43ed8-9490-4433-843f-9020cd3470a1.jpg?1562635091",
          setName: "Magic 2012",
          rarity: "rare",
          power: null,
          toughness: null,
          multiverse_id: 220139,
          rulings_uri:
            "https://api.scryfall.com/cards/1ed43ed8-9490-4433-843f-9020cd3470a1/rulings",
          scryfall_uri:
            "https://scryfall.com/card/m12/12/day-of-judgment?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ravages of War",
          colors: "{W}",
          type: "Sorcery",
          cmc: 4,
          image:
            "https://img.scryfall.com/cards/small/front/b/d/bdf7d5d9-d980-445e-b1e4-5af0681c6e60.jpg?1562870468",
          setName: "Masters Edition II",
          rarity: "rare",
          power: null,
          toughness: null,
          multiverse_id: 184724,
          rulings_uri:
            "https://api.scryfall.com/cards/bdf7d5d9-d980-445e-b1e4-5af0681c6e60/rulings",
          scryfall_uri:
            "https://scryfall.com/card/me2/27/ravages-of-war?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wrath of God",
          colors: "{W}",
          type: "Sorcery",
          cmc: 4,
          image:
            "https://img.scryfall.com/cards/small/front/2/d/2d9b12cc-f616-4b52-91eb-a430e70f9251.jpg?1580013874",
          setName: "Eternal Masters",
          rarity: "rare",
          power: null,
          toughness: null,
          multiverse_id: 413580,
          rulings_uri:
            "https://api.scryfall.com/cards/2d9b12cc-f616-4b52-91eb-a430e70f9251/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ema/38/wrath-of-god?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Banishing Light",
          colors: "{W}",
          type: "Enchantment",
          cmc: 3,
          image:
            "https://img.scryfall.com/cards/small/front/a/1/a1ddd113-140f-49c9-b45c-cf1b0d1dffd8.jpg?1592345530",
          setName: "Theros Beyond Death",
          rarity: "uncommon",
          power: null,
          toughness: null,
          multiverse_id: 476255,
          rulings_uri:
            "https://api.scryfall.com/cards/a1ddd113-140f-49c9-b45c-cf1b0d1dffd8/rulings",
          scryfall_uri:
            "https://scryfall.com/card/thb/4/banishing-light?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Oblivion Ring",
          colors: "{W}",
          type: "Enchantment",
          cmc: 3,
          image:
            "https://img.scryfall.com/cards/small/front/b/f/bff31eba-8ab3-403e-8d82-37a18b279bec.jpg?1562266919",
          setName: "Modern Masters 2015",
          rarity: "uncommon",
          power: null,
          toughness: null,
          multiverse_id: 397760,
          rulings_uri:
            "https://scryfall.com/card/mm2/29/oblivion-ring?utm_source=api",
          scryfall_uri:
            "https://scryfall.com/card/mm2/29/oblivion-ring?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Moat",
          colors: "{W}",
          type: "Enchantment",
          cmc: 4,
          image:
            "https://img.scryfall.com/cards/small/front/e/2/e2dffeb3-c858-4b8c-ae1f-109721f7d2da.jpg?1559592270",
          setName: "Masters Edition",
          rarity: "rare",
          power: null,
          toughness: null,
          multiverse_id: 159308,
          rulings_uri:
            "https://api.scryfall.com/cards/e2dffeb3-c858-4b8c-ae1f-109721f7d2da/rulings",
          scryfall_uri: "https://scryfall.com/card/me1/21/moat?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Karakas",
          colors: "{W}",
          type: "Legendary Land",
          cmc: 0,
          image:
            "https://img.scryfall.com/cards/small/front/e/5/e52214e1-404a-405a-b08e-20e13c087338.jpg?1559959289",
          setName: "Ultimate Masters",
          rarity: "mythic",
          power: null,
          toughness: null,
          multiverse_id: 456840,
          rulings_uri:
            "https://api.scryfall.com/cards/e52214e1-404a-405a-b08e-20e13c087338/rulings",
          scryfall_uri:
            "https://scryfall.com/card/uma/244/karakas?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jace, Vryn's Prodigy",
          colors: "{U}",
          type: "Legendary Creature — Human Wizard",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/0/2/02d6d693-f1f3-4317-bcc0-c21fa8490d38.jpg?1590511929",
          setName: "Magic Origins",
          rarity: "mythic",
          power: 0,
          toughness: 2,
          multiverse_id: 398434,
          rulings_uri:
            "https://api.scryfall.com/cards/02d6d693-f1f3-4317-bcc0-c21fa8490d38/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ori/60/jace-vryns-prodigy-jace-telepath-unbound?utm_source=api",
          keywords: "Mill",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jace, Vryn's Prodigy",
          colors: "{U}",
          type: "Creature — Kor Rogue",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/3/6/368ee06f-9021-4b65-9f53-9c326bf3a27f.jpg?1562906492",
          setName: "Time Spiral",
          rarity: "common",
          power: 1,
          toughness: 1,
          multiverse_id: 118918,
          rulings_uri:
            "https://api.scryfall.com/cards/368ee06f-9021-4b65-9f53-9c326bf3a27f/rulings",
          scryfall_uri:
            "https://scryfall.com/card/tsp/66/looter-il-kor?utm_source=api",
          keywords: "Shadow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Phantasmal Image",
          colors: "{U}",
          type: "Creature — Illusion",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/e/7/e7472958-dd1b-48a7-a960-ec2ef3b69ded.jpg?1561770077",
          setName: "Modern Masters 2017",
          rarity: "rare",
          power: 0,
          toughness: 0,
          multiverse_id: 118918,
          rulings_uri:
            "https://api.scryfall.com/cards/e7472958-dd1b-48a7-a960-ec2ef3b69ded/rulings",
          scryfall_uri:
            "https://scryfall.com/card/mm3/46/phantasmal-image?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Snapcaster Mage",
          colors: "{U}",
          type: "Creature — Illusion",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/7/e/7e41765e-43fe-461d-baeb-ee30d13d2d93.jpg?1547516526",
          setName: "Ultimate Masters",
          rarity: "mythic",
          power: 2,
          toughness: 1,
          multiverse_id: 456667,
          rulings_uri:
            "https://api.scryfall.com/cards/7e41765e-43fe-461d-baeb-ee30d13d2d93/rulings",
          scryfall_uri:
            "https://scryfall.com/card/uma/71/snapcaster-mage?utm_source=api",
          keywords: "Flash",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Deceiver Exarch",
          colors: "{U}",
          type: "Creature — Cleric",
          cmc: 3,
          image:
            "https://img.scryfall.com/cards/small/front/3/5/35437d86-6f92-480a-aa0c-c17c3943c00c.jpg?1592672519",
          setName: "Commander Anthology",
          rarity: "uncommon",
          power: 1,
          toughness: 4,
          multiverse_id: 430255,
          rulings_uri:
            "https://api.scryfall.com/cards/35437d86-6f92-480a-aa0c-c17c3943c00c/rulings",
          scryfall_uri:
            "https://scryfall.com/card/cma/36/deceiver-exarch?utm_source=api",
          keywords: "Flash",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pestermite",
          colors: "{U}",
          type: "Creature — Cleric",
          cmc: 3,
          image:
            "https://img.scryfall.com/cards/small/front/b/5/b58a6a63-c7d8-4f2f-acaf-b0a871eb5a7c.jpg?1561968098",
          setName: "Modern Masters",
          rarity: "common",
          power: 2,
          toughness: 1,
          multiverse_id: 370440,
          rulings_uri:
            "https://api.scryfall.com/cards/b58a6a63-c7d8-4f2f-acaf-b0a871eb5a7c/rulings",
          scryfall_uri:
            "https://scryfall.com/card/mma/59/pestermite?utm_source=api",
          keywords: "Flying, Flash",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "True-Name Nemesis",
          colors: "{U}",
          type: "Creature — Merfolk Rogue",
          cmc: 3,
          image:
            "https://img.scryfall.com/cards/small/front/2/d/2da0b45b-0ca9-40c4-bc7f-791039bc1876.jpg?1562904268",
          setName: "Battlebond",
          rarity: "mythic",
          power: 3,
          toughness: 1,
          multiverse_id: 446104,
          rulings_uri:
            "https://api.scryfall.com/cards/2da0b45b-0ca9-40c4-bc7f-791039bc1876/rulings",
          scryfall_uri:
            "https://scryfall.com/card/bbd/136/true-name-nemesis?utm_source=api",
          keywords: "Protection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vendilion Clique",
          colors: "{U}",
          type: "Legendary Creature — Faerie Wizard",
          cmc: 3,
          image:
            "https://img.scryfall.com/cards/small/front/c/d/cd702cf1-10ca-4448-9fb1-b6de635e839c.jpg?1562441167",
          setName: "Masters 25",
          rarity: "mythic",
          power: 3,
          toughness: 1,
          multiverse_id: 442065,
          rulings_uri:
            "https://api.scryfall.com/cards/cd702cf1-10ca-4448-9fb1-b6de635e839c/rulings",
          scryfall_uri:
            "https://scryfall.com/card/a25/76/vendilion-clique?utm_source=api",
          keywords: "Flying, Flash",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Glen Elendra Archmage",
          colors: "{U}",
          type: "Creature — Faerie Wizard",
          cmc: 4,
          image:
            "https://img.scryfall.com/cards/small/front/b/d/bd9af767-42da-46c7-a2b8-3957b2e3063f.jpg?1547516310",
          setName: "Ultimate Masters",
          rarity: "rare",
          power: 2,
          toughness: 2,
          multiverse_id: 456654,
          rulings_uri:
            "https://api.scryfall.com/cards/bd9af767-42da-46c7-a2b8-3957b2e3063f/rulings",
          scryfall_uri:
            "https://scryfall.com/card/uma/58/glen-elendra-archmage?utm_source=api",
          keywords: "Flying, Persist",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Urza, Lord High Artificer",
          colors: "{U}",
          type: "Legendary Creature — Human Artificer",
          cmc: 4,
          image:
            "https://img.scryfall.com/cards/small/front/9/e/9e7fb3c0-5159-4d1f-8490-ce4c9a60f567.jpg?1567181307",
          setName: "Modern Horizons",
          rarity: "mythic",
          power: 1,
          toughness: 4,
          multiverse_id: 464024,
          rulings_uri:
            "https://api.scryfall.com/cards/9e7fb3c0-5159-4d1f-8490-ce4c9a60f567/rulings",
          scryfall_uri:
            "https://scryfall.com/card/mh1/75/urza-lord-high-artificer?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Venser, Shaper Savant",
          colors: "{U}",
          type: "Legendary Creature — Human Wizard",
          cmc: 4,
          image:
            "https://img.scryfall.com/cards/small/front/9/2/92a0243a-4661-4c7c-8dd2-9237bf9238de.jpg?1561766328",
          setName: "Modern Masters 2017",
          rarity: "rare",
          power: 2,
          toughness: 2,
          multiverse_id: 425880,
          rulings_uri:
            "https://api.scryfall.com/cards/92a0243a-4661-4c7c-8dd2-9237bf9238de/rulings",
          scryfall_uri:
            "https://scryfall.com/card/mm3/55/venser-shaper-savant?utm_source=api",
          keywords: "Flash",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Whirler Rogue",
          colors: "{U}",
          type: "Creature — Human Rogue Artificer",
          cmc: 4,
          image:
            "https://img.scryfall.com/cards/small/front/7/3/73b9b5ce-5687-4c3a-ac33-189badf8b98d.jpg?1592710694",
          setName: "Commander 2018",
          rarity: "uncommon",
          power: 2,
          toughness: 2,
          multiverse_id: 451066,
          rulings_uri:
            "https://api.scryfall.com/cards/73b9b5ce-5687-4c3a-ac33-189badf8b98d/rulings",
          scryfall_uri:
            "https://scryfall.com/card/c18/111/whirler-rogue?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Clocknapper",
          colors: "{U}",
          type: "Creature — Human Spy",
          cmc: 5,
          image:
            "https://img.scryfall.com/cards/small/front/1/4/14e34f0b-f94b-49fb-a667-8c11dd9d59d4.jpg?1562899399",
          setName: "Unstable",
          rarity: "rare",
          power: 2,
          toughness: 2,
          multiverse_id: 439418,
          rulings_uri:
            "https://api.scryfall.com/cards/14e34f0b-f94b-49fb-a667-8c11dd9d59d4/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ust/29/clocknapper?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mulldrifter",
          colors: "{U}",
          type: "Creature — Elemental",
          cmc: 5,
          image:
            "https://img.scryfall.com/cards/small/front/d/9/d9fb2f2b-ed82-4461-9013-490e8bca89f8.jpg?1591320295",
          setName: "Commander 2020",
          rarity: "uncommon",
          power: 2,
          toughness: 2,
          multiverse_id: 482745,
          rulings_uri:
            "https://api.scryfall.com/cards/d9fb2f2b-ed82-4461-9013-490e8bca89f8/rulings",
          scryfall_uri:
            "https://scryfall.com/card/c20/117/mulldrifter?utm_source=api",
          keywords: "Flying, Evoke",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Consecrated Sphinx",
          colors: "{U}",
          type: "Creature — Sphinx",
          cmc: 6,
          image:
            "https://img.scryfall.com/cards/small/front/0/3/030e46a1-64a7-47e3-9b9f-82a22fe3734b.jpg?1562845279",
          setName: "Iconic Masters",
          rarity: "mythic",
          power: 4,
          toughness: 6,
          multiverse_id: 438613,
          rulings_uri:
            "https://api.scryfall.com/cards/030e46a1-64a7-47e3-9b9f-82a22fe3734b/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ima/47/consecrated-sphinx?utm_source=api",
          keywords: "Flying",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jace, the Mind Sculptor",
          colors: "{U}",
          type: "Legendary Planeswalker — Jace",
          cmc: 4,
          image:
            "https://img.scryfall.com/cards/small/front/c/0/c057dc0d-4017-4e60-9c5e-45fc569a8d31.jpg?1562440655",
          setName: "Masters 25",
          rarity: "mythic",
          power: 4,
          toughness: 6,
          multiverse_id: 442051,
          rulings_uri:
            "https://api.scryfall.com/cards/c057dc0d-4017-4e60-9c5e-45fc569a8d31/rulings",
          scryfall_uri:
            "https://scryfall.com/card/a25/62/jace-the-mind-sculptor?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Inkwell Leviathan",
          colors: "{U}",
          type: "Artifact Creature — Leviathan",
          cmc: 9,
          image:
            "https://img.scryfall.com/cards/small/front/0/6/06ae6a96-b01a-4ba3-b8c1-87ef56ace103.jpg?1592710580",
          setName: "Commander 2018",
          rarity: "rare",
          power: 7,
          toughness: 11,
          multiverse_id: 451046,
          rulings_uri:
            "https://api.scryfall.com/cards/06ae6a96-b01a-4ba3-b8c1-87ef56ace103/rulings",
          scryfall_uri:
            "https://scryfall.com/card/c18/91/inkwell-leviathan?utm_source=api",
          keywords: "Landwalk, Shroud, Trample, Islandwalk",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Crystal Shard",
          colors: "{U}",
          type: "Artifact",
          cmc: 3,
          image:
            "https://img.scryfall.com/cards/small/front/b/1/b1c1d05b-92be-40d7-859f-75293a531a84.jpg?1562155044",
          setName: "Mirrodin",
          rarity: "uncommon",
          power: null,
          toughness: null,
          multiverse_id: 46035,
          rulings_uri:
            "https://api.scryfall.com/cards/b1c1d05b-92be-40d7-859f-75293a531a84/rulings",
          scryfall_uri:
            "https://scryfall.com/card/mrd/159/crystal-shard?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vedalken Shackles",
          colors: "{U}",
          type: "Artifact",
          cmc: 3,
          image:
            "https://img.scryfall.com/cards/small/front/e/3/e3257833-b237-49ef-856a-3c1d1c752cf8.jpg?1561969029",
          setName: "Modern Masters",
          rarity: "mythic",
          power: null,
          toughness: null,
          multiverse_id: 370366,
          rulings_uri:
            "https://api.scryfall.com/cards/e3257833-b237-49ef-856a-3c1d1c752cf8/rulings",
          scryfall_uri:
            "https://scryfall.com/card/mma/218/vedalken-shackles?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Force of Will",
          colors: "{U}",
          type: "Instant",
          cmc: 5,
          image:
            "https://img.scryfall.com/cards/small/front/e/b/ebc01ab4-d89a-4d25-bf54-6aed33772f4b.jpg?1580013954",
          setName: "Eternal Masters",
          rarity: "mythic",
          power: null,
          toughness: null,
          multiverse_id: 413591,
          rulings_uri:
            "https://api.scryfall.com/cards/ebc01ab4-d89a-4d25-bf54-6aed33772f4b/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ema/49/force-of-will?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ancestral Recall",
          colors: "{U}",
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
          name: "Brainstorm",
          colors: "{U}",
          type: "Instant",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/8/2/821f1c26-6253-4ecc-a243-a5662c637a4a.jpg?1592710527",
          setName: "Commander 2018",
          rarity: "uncommon",
          power: null,
          toughness: null,
          multiverse_id: 451037,
          rulings_uri:
            "https://api.scryfall.com/cards/821f1c26-6253-4ecc-a243-a5662c637a4a/rulings",
          scryfall_uri:
            "https://scryfall.com/card/c18/82/brainstorm?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Force Spike",
          colors: "{U}",
          type: "Instant",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/9/7/97a6c6c9-dd26-4ce7-850f-0b3fc49245bd.jpg?1592713367",
          setName: "Duel Decks: Izzet vs. Golgari",
          rarity: "common",
          power: null,
          toughness: null,
          multiverse_id: 292750,
          rulings_uri:
            "https://api.scryfall.com/cards/97a6c6c9-dd26-4ce7-850f-0b3fc49245bd/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ddj/14/force-spike?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mystical Tutor",
          colors: "{U}",
          type: "Instant",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/9/2/9264ecb7-bfc0-495d-aaaa-829045ea858f.jpg?1580014050",
          setName: "Eternal Masters",
          rarity: "rare",
          power: null,
          toughness: null,
          multiverse_id: 413604,
          rulings_uri:
            "https://api.scryfall.com/cards/9264ecb7-bfc0-495d-aaaa-829045ea858f/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ema/62/mystical-tutor?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Condescend",
          colors: "{U}",
          type: "Instant",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/5/b/5ba16c0f-dd42-4a2a-8f08-bc8c8478952b.jpg?1562849378",
          setName: "Iconic Masters",
          rarity: "uncommon",
          power: null,
          toughness: null,
          multiverse_id: 438612,
          rulings_uri:
            "https://api.scryfall.com/cards/5ba16c0f-dd42-4a2a-8f08-bc8c8478952b/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ima/46/condescend?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Counterspell",
          colors: "{U}",
          type: "Instant",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/c/c/cca8eb95-d071-46a4-885c-3da25b401806.jpg?1562441143",
          setName: "Masters 25",
          rarity: "common",
          power: null,
          toughness: null,
          multiverse_id: 442039,
          rulings_uri:
            "https://api.scryfall.com/cards/cca8eb95-d071-46a4-885c-3da25b401806/rulings",
          scryfall_uri:
            "https://scryfall.com/card/a25/50/counterspell?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cyclonic Rift",
          colors: "{U}",
          type: "Instant",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/2/6/268f6afc-bf16-4ca7-a986-945a95d3bffc.jpg?1561761668",
          setName: "Modern Masters 2017",
          rarity: "rare",
          power: null,
          toughness: null,
          multiverse_id: 425860,
          rulings_uri:
            "https://api.scryfall.com/cards/268f6afc-bf16-4ca7-a986-945a95d3bffc/rulings",
          scryfall_uri:
            "https://scryfall.com/card/mm3/35/cyclonic-rift?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Daze",
          colors: "{U}",
          type: "Instant",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/f/0/f05e9a3e-8a35-4687-85cb-e31b3927a5e2.jpg?1580013916",
          setName: "Eternal Masters",
          rarity: "uncommon",
          power: null,
          toughness: null,
          multiverse_id: 413586,
          rulings_uri:
            "https://api.scryfall.com/cards/f05e9a3e-8a35-4687-85cb-e31b3927a5e2/rulings",
          scryfall_uri: "https://scryfall.com/card/ema/44/daze?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mana Drain",
          colors: "{U}",
          type: "Instant",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/4/1/416d2d51-8f29-4e95-b037-e8c32b081e6c.jpg?1562848002",
          setName: "Iconic Masters",
          rarity: "mythic",
          power: null,
          toughness: null,
          multiverse_id: 438631,
          rulings_uri:
            "https://api.scryfall.com/cards/416d2d51-8f29-4e95-b037-e8c32b081e6c/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ima/65/mana-drain?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mana Leak",
          colors: "{U}",
          type: "Instant",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/2/4/247939d9-87e9-4f01-b223-fb4cfa7dbbe1.jpg?1562846529",
          setName: "Iconic Masters",
          rarity: "common",
          power: null,
          toughness: null,
          multiverse_id: 438632,
          rulings_uri:
            "https://api.scryfall.com/cards/416d2d51-8f29-4e95-b037-e8c32b081e6c/rulings",
          scryfall_uri:
            "https://api.scryfall.com/cards/247939d9-87e9-4f01-b223-fb4cfa7dbbe1/rulings",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Memory Lapse",
          colors: "{U}",
          type: "Instant",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/3/0/30202613-d05f-4f47-af97-d0b75ccac293.jpg?1580014031",
          setName: "Eternal Masters",
          rarity: "common",
          power: null,
          toughness: null,
          multiverse_id: 413602,
          rulings_uri:
            "https://api.scryfall.com/cards/30202613-d05f-4f47-af97-d0b75ccac293/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ema/60/memory-lapse?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Miscalculation",
          colors: "{U}",
          type: "Instant",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/4/b/4b4956a2-9a39-4152-9c98-70e4b2acfa26.jpg?1562862809",
          setName: "Urza's Legacy",
          rarity: "common",
          power: null,
          toughness: null,
          multiverse_id: 12376,
          rulings_uri:
            "https://api.scryfall.com/cards/4b4956a2-9a39-4152-9c98-70e4b2acfa26/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ulg/36/miscalculation?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Remand",
          colors: "{U}",
          type: "Instant",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/d/c/dc595c63-af05-4c05-80e8-e1a90df26b0f.jpg?1562268359",
          setName: "Modern Masters 2015",
          rarity: "uncommon",
          power: null,
          toughness: null,
          multiverse_id: 397881,
          rulings_uri:
            "https://api.scryfall.com/cards/dc595c63-af05-4c05-80e8-e1a90df26b0f/rulings",
          scryfall_uri:
            "https://scryfall.com/card/mm2/55/remand?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Forbid",
          colors: "{U}",
          type: "Instant",
          cmc: 3,
          image:
            "https://img.scryfall.com/cards/small/front/0/f/0fc2a6c5-9904-47e0-adec-e9e6e79cd11d.jpg?1562428622",
          setName: "Tempest Remastered",
          rarity: "rare",
          power: null,
          toughness: null,
          multiverse_id: 397532,
          rulings_uri:
            "https://api.scryfall.com/cards/0fc2a6c5-9904-47e0-adec-e9e6e79cd11d/rulings",
          scryfall_uri:
            "https://scryfall.com/card/tpr/50/forbid?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cryptic Command",
          colors: "{U}",
          type: "Instant",
          cmc: 4,
          image:
            "https://img.scryfall.com/cards/small/front/3/0/30f6fca9-003b-4f6b-9d6e-1e88adda4155.jpg?1562847413",
          setName: "Iconic Masters",
          rarity: "rare",
          power: null,
          toughness: null,
          multiverse_id: 438614,
          rulings_uri:
            "https://api.scryfall.com/cards/30f6fca9-003b-4f6b-9d6e-1e88adda4155/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ima/48/cryptic-command?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fact or Fiction",
          colors: "{U}",
          type: "Instant",
          cmc: 4,
          image:
            "https://img.scryfall.com/cards/small/front/d/7/d7a7a247-51bd-4244-81c7-2b406a23cc69.jpg?1568003990",
          setName: "Commander 2019",
          rarity: "uncommon",
          power: null,
          toughness: null,
          multiverse_id: 470631,
          rulings_uri:
            "https://api.scryfall.com/cards/d7a7a247-51bd-4244-81c7-2b406a23cc69/rulings",
          scryfall_uri:
            "https://scryfall.com/card/c19/85/fact-or-fiction?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mystic Confluence",
          colors: "{U}",
          type: "Instant",
          cmc: 5,
          image:
            "https://img.scryfall.com/cards/small/front/f/5/f557a8f6-1b1f-493b-a064-f14fbdb8e0f4.jpg?1562944418",
          setName: "Battlebond",
          rarity: "rare",
          power: null,
          toughness: null,
          multiverse_id: 446090,
          rulings_uri:
            "https://api.scryfall.com/cards/f557a8f6-1b1f-493b-a064-f14fbdb8e0f4/rulings",
          scryfall_uri:
            "https://scryfall.com/card/bbd/122/mystic-confluence?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dig Through Time",
          colors: "{U}",
          type: "Instant",
          cmc: 8,
          image:
            "https://img.scryfall.com/cards/small/front/0/1/01cd4184-93ce-4005-b6d1-140afa3dd429.jpg?1547516182",
          setName: "Ultimate Masters",
          rarity: "rare",
          power: null,
          toughness: null,
          multiverse_id: 456646,
          rulings_uri:
            "https://api.scryfall.com/cards/01cd4184-93ce-4005-b6d1-140afa3dd429/rulings",
          scryfall_uri:
            "https://scryfall.com/card/uma/50/dig-through-time?utm_source=api",
          keywords: "Delve",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ponder",
          colors: "{U}",
          type: "Sorcery",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/9/1/91382955-bcfc-4fb6-8cce-dc107e5b4c32.jpg?1592710610",
          setName: "Commander 2018",
          rarity: "common",
          power: null,
          toughness: null,
          multiverse_id: 456646,
          rulings_uri:
            "https://api.scryfall.com/cards/91382955-bcfc-4fb6-8cce-dc107e5b4c32/rulings",
          scryfall_uri:
            "https://scryfall.com/card/c18/96/ponder?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Preordain",
          colors: "{U}",
          type: "Sorcery",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/7/8/78d22ece-0cb1-4faf-a871-995449c1a41f.jpg?1562706111",
          setName: "Commander 2015",
          rarity: "common",
          power: null,
          toughness: null,
          multiverse_id: 405347,
          rulings_uri:
            "https://api.scryfall.com/cards/78d22ece-0cb1-4faf-a871-995449c1a41f/rulings",
          scryfall_uri:
            "https://scryfall.com/card/c15/101/preordain?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Time Walk",
          colors: "{U}",
          type: "Sorcery",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/7/0/70901356-3266-4bd9-aacc-f06c27271de5.jpg?1562917505",
          setName: "Vintage Masters",
          rarity: "mythic",
          power: null,
          toughness: null,
          multiverse_id: 383131,
          rulings_uri:
            "https://api.scryfall.com/cards/70901356-3266-4bd9-aacc-f06c27271de5/rulings",
          scryfall_uri:
            "https://scryfall.com/card/vma/2/time-walk?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tinker",
          colors: "{U}",
          type: "Sorcery",
          cmc: 3,
          image:
            "https://img.scryfall.com/cards/small/front/7/d/7da23b15-dfb8-4267-9b33-d7a4c035c434.jpg?1562863289",
          setName: "Urza's Legacy",
          rarity: "uncommon",
          power: null,
          toughness: null,
          multiverse_id: 12383,
          rulings_uri:
            "https://api.scryfall.com/cards/7da23b15-dfb8-4267-9b33-d7a4c035c434/rulings",
          scryfall_uri:
            "https://scryfall.com/card/ulg/45/tinker?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Upheaval",
          colors: "{U}",
          type: "Sorcery",
          cmc: 6,
          image:
            "https://img.scryfall.com/cards/small/front/7/7/77b71173-d910-48f7-bba5-fc5f696b280c.jpg?1562918980",
          setName: "Urza's Legacy",
          rarity: "uncommon",
          power: null,
          toughness: null,
          multiverse_id: 383143,
          rulings_uri:
            "https://api.scryfall.com/cards/77b71173-d910-48f7-bba5-fc5f696b280c/rulings",
          scryfall_uri:
            "https://scryfall.com/card/vma/100/upheaval?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Search for Azcanta // Azcanta, the Sunken Ruin",
          colors: "{U}",
          type: "Legendary Enchantment",
          cmc: 2,
          image:
            "https://img.scryfall.com/cards/small/front/1/a/1a7e242e-bb48-4134-a1c2-6033713d658f.jpg?1562551479",
          setName: "Ixalan",
          rarity: "rare",
          power: null,
          toughness: null,
          multiverse_id: 435226,
          rulings_uri:
            "https://api.scryfall.com/cards/1a7e242e-bb48-4134-a1c2-6033713d658f/rulings",
          scryfall_uri:
            "https://scryfall.com/card/xln/74/search-for-azcanta-azcanta-the-sunken-ruin?utm_source=api",
          keywords: "Transform",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Control Magic",
          colors: "{U}",
          type: "Enchantment — Aura",
          cmc: 4,
          image:
            "https://img.scryfall.com/cards/small/front/8/4/84992800-9bad-4598-afd4-f1e59d2e0956.jpg?1592672507",
          setName: "Commander Anthology",
          rarity: "uncommon",
          power: null,
          toughness: null,
          multiverse_id: 430253,
          rulings_uri:
            "https://api.scryfall.com/cards/84992800-9bad-4598-afd4-f1e59d2e0956/rulings",
          scryfall_uri:
            "https://scryfall.com/card/cma/34/control-magic?utm_source=api",
          keywords: "Enchant",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Opposition",
          colors: "{U}",
          type: "Enchantment",
          cmc: 4,
          image:
            "https://img.scryfall.com/cards/small/front/8/9/8980e292-1384-4662-aa72-bc4f6ca30d51.jpg?1562242218",
          setName: "Seventh Edition",
          rarity: "rare",
          power: null,
          toughness: null,
          multiverse_id: 15796,
          rulings_uri:
            "https://api.scryfall.com/cards/8980e292-1384-4662-aa72-bc4f6ca30d51/rulings",
          scryfall_uri:
            "https://scryfall.com/card/7ed/92/opposition?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Treachery",
          colors: "{U}",
          type: "Enchantment — Aura",
          cmc: 5,
          image:
            "https://img.scryfall.com/cards/small/front/6/1/613694aa-b169-400d-8063-2b83d8303611.jpg?1562444218",
          setName: "Urza's Destiny",
          rarity: "rare",
          power: null,
          toughness: null,
          multiverse_id: 15796,
          rulings_uri:
            "https://api.scryfall.com/cards/613694aa-b169-400d-8063-2b83d8303611/rulings",
          scryfall_uri:
            "https://scryfall.com/card/uds/50/treachery?utm_source=api",
          keywords: "Enchant",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tolarian Academy",
          colors: "{U}",
          type: "Legendary Land",
          cmc: 0,
          image:
            "https://img.scryfall.com/cards/small/front/f/d/fd99bce1-ce39-464b-8e61-2631eb3ed6f6.jpg?1562946191",
          setName: "Vintage Masters",
          rarity: "mythic",
          power: null,
          toughness: null,
          multiverse_id: 383133,
          rulings_uri:
            "https://api.scryfall.com/cards/fd99bce1-ce39-464b-8e61-2631eb3ed6f6/rulings",
          scryfall_uri:
            "https://scryfall.com/card/vma/319/tolarian-academy?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bloodsoaked Champion",
          colors: "{B}",
          type: "Creature — Human Warrior",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/3/4/34bc9bb0-5ec1-400f-89e7-b450980a3391.jpg?1562784700",
          setName: "Khans of Tarkir",
          rarity: "rare",
          power: 2,
          toughness: 1,
          multiverse_id: 386494,
          rulings_uri:
            "https://api.scryfall.com/cards/34bc9bb0-5ec1-400f-89e7-b450980a3391/rulings",
          scryfall_uri:
            "https://scryfall.com/card/vma/319/tolarian-academy?utm_source=api",
          keywords: "Raid",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Carnophage",
          colors: "{B}",
          type: "Creature — Zombie",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/8/8/889a92ca-e198-494d-9ccb-6ae2c19ec62e.jpg?1562430333",
          setName: "Tempest Remastered",
          rarity: "common",
          power: 2,
          toughness: 2,
          multiverse_id: 397570,
          rulings_uri:
            "https://api.scryfall.com/cards/889a92ca-e198-494d-9ccb-6ae2c19ec62e/rulings",
          scryfall_uri:
            "https://scryfall.com/card/tpr/84/carnophage?utm_source=api",
          keywords: "Raid",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Diregraf Ghoul",
          colors: "{B}",
          type: "Creature — Zombie",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/5/c/5cf2d355-404e-4c21-9bc2-973d09a845a5.jpg?1562302248",
          setName: "Core Set 2019",
          rarity: "uncommon",
          power: 2,
          toughness: 2,
          multiverse_id: 447228,
          rulings_uri:
            "https://api.scryfall.com/cards/5cf2d355-404e-4c21-9bc2-973d09a845a5/rulings",
          scryfall_uri:
            "https://scryfall.com/card/m19/92/diregraf-ghoul?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dread Wanderer",
          colors: "{B}",
          type: "Creature — Zombie Jackal",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/3/4/343fc82d-7d10-4489-8f7e-9995322114e2.jpg?1543675258",
          setName: "Amonkhet",
          rarity: "rare",
          power: 2,
          toughness: 1,
          multiverse_id: 426790,
          rulings_uri:
            "https://api.scryfall.com/cards/343fc82d-7d10-4489-8f7e-9995322114e2/rulings",
          scryfall_uri:
            "https://scryfall.com/card/akh/88/dread-wanderer?utm_source=api",
          keywords: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gravecrawler",
          colors: "{B}",
          type: "Creature — Zombie",
          cmc: 1,
          image:
            "https://img.scryfall.com/cards/small/front/3/c/3c189fe5-a5f9-4057-bb70-0a88ae3169de.jpg?1592763247",
          setName: "Amonkhet",
          rarity: "rare",
          power: 2,
          toughness: 1,
          multiverse_id: 426790,
          rulings_uri:
            "https://api.scryfall.com/cards/343fc82d-7d10-4489-8f7e-9995322114e2/rulings",
          scryfall_uri:
            "https://scryfall.com/card/akh/88/dread-wanderer?utm_source=api",
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
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("cards", null, {});
  },
};
