'use strict';

const characterUl = document.querySelector('.js_characterUl');
const inputSearch = document.querySelector('.js_inputSearch');
const btnSearch = document.querySelector('.js_btnSearch');
const favouritesUl = document.querySelector('.js_favouritesUl');

let allCharacters = [
    {
      _id: 112,
      films: ["Hercules (film)"],
      shortFilms: [],
      tvShows: ["Hercules (TV series)"],
      videoGames: ["Kingdom Hearts III"],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Achilles_(Hercules)",
      name: "Achilles",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png",
      createdAt: "2021-04-12T01:31:30.547Z",
      updatedAt: "2021-12-20T20:39:18.033Z",
      url: "https://api.disneyapi.dev/characters/112",
      __v: 0,
    },
    {
      _id: 18,
      films: ["The Fox and the Hound", "The Fox and the Hound 2"],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Abigail_the_Cow",
      name: "Abigail the Cow",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/0/05/Fox-disneyscreencaps_com-901.jpg",
      createdAt: "2021-04-12T01:26:03.413Z",
      updatedAt: "2021-12-20T20:39:18.032Z",
      url: "https://api.disneyapi.dev/characters/18",
      __v: 0,
    },
    {
      _id: 16,
      films: ["Cheetah"],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Abdullah",
      name: "Abdullah",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/c/cb/1087603-44532-clp-950.jpg",
      createdAt: "2021-04-12T01:26:02.377Z",
      updatedAt: "2021-12-20T20:39:18.032Z",
      url: "https://api.disneyapi.dev/characters/16",
      __v: 0,
    },
    {
      _id: 45,
      films: ["Mary Poppins (film)", "Mary Poppins Returns"],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Admiral_Boom_and_Mr._Binnacle",
      name: "Admiral Boom and Mr. Binnacle",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/b/be/Marypoppins-disneyscreencaps_com-1086.jpg",
      createdAt: "2021-04-12T01:26:21.560Z",
      updatedAt: "2021-12-20T20:39:18.033Z",
      url: "https://api.disneyapi.dev/characters/45",
      __v: 0,
    },
    {
      _id: 7,
      films: [],
      shortFilms: [],
      tvShows: ["Gravity Falls"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/.GIFfany",
      name: ".GIFfany",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/5/51/Giffany.png",
      createdAt: "2021-04-12T01:25:10.354Z",
      updatedAt: "2021-12-20T20:39:18.032Z",
      url: "https://api.disneyapi.dev/characters/7",
      __v: 0,
    },
    {
      _id: 12,
      films: [],
      shortFilms: [],
      tvShows: ["Pickle and Peanut"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl:
        "https://disney.fandom.com/wiki/90%27s_Adventure_Bear_(character)",
      name: "90's Adventure Bear",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/3/3f/90%27s_Adventure_Bear_profile.png",
      createdAt: "2021-04-12T01:26:00.335Z",
      updatedAt: "2021-12-20T20:39:18.032Z",
      url: "https://api.disneyapi.dev/characters/12",
      __v: 0,
    },
    {
      _id: 36,
      films: [],
      shortFilms: [],
      tvShows: ["K.C. Undercover"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Candace_Adams",
      name: "Candace Adams",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/8/8b/Enemy_of_the_State_promo_3.jpg",
      createdAt: "2021-04-12T01:26:16.062Z",
      updatedAt: "2021-12-20T20:39:18.033Z",
      url: "https://api.disneyapi.dev/characters/36",
      __v: 0,
    },
    {
      _id: 139,
      films: ["The Lion King", "The Lion King (2019 film)"],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Ahadi",
      name: "Ahadi",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/b/b3/Ahadihead.png",
      createdAt: "2021-04-12T01:31:47.129Z",
      updatedAt: "2021-12-20T20:39:18.877Z",
      url: "https://api.disneyapi.dev/characters/139",
      __v: 0,
    },
    {
      _id: 152,
      films: [],
      shortFilms: [],
      tvShows: ["Aladdin (TV series)"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Al_Muddy_Sultan",
      name: "Al Muddy Sultan",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/e/e0/Almuddyking.jpg",
      createdAt: "2021-04-12T01:31:55.281Z",
      updatedAt: "2021-12-20T20:39:18.877Z",
      url: "https://api.disneyapi.dev/characters/152",
      __v: 0,
    },
    {
      _id: 181,
      films: [],
      shortFilms: [],
      tvShows: ["Chip 'n Dale Rescue Rangers"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Irwina_Allen",
      name: "Irwina Allen",
      imageUrl:
        "https://via.placeholder.com/210x295/%EF%AC%80%EF%AC%80%EF%AC%80/555555/?text=Disney",
      createdAt: "2021-04-12T01:32:15.300Z",
      updatedAt: "2021-12-20T20:39:18.877Z",
      url: "https://api.disneyapi.dev/characters/181",
      __v: 0,
    },
    {
      _id: 204,
      films: ["The Robber Kitten", "Mickey's Polo Team"],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Ambrose",
      name: "Ambrose",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/d/d3/Ambrose.jpg",
      createdAt: "2021-04-12T01:32:29.083Z",
      updatedAt: "2021-12-20T20:39:19.408Z",
      url: "https://api.disneyapi.dev/characters/204",
      __v: 0,
    },
    {
      _id: 215,
      films: ["Ben and Me"],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Amos",
      name: "Amos",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/8/83/Tve8132-19531110-2244.jpg",
      createdAt: "2021-04-12T01:32:35.677Z",
      updatedAt: "2021-12-20T20:39:19.408Z",
      url: "https://api.disneyapi.dev/characters/215",
      __v: 0,
    },
    {
      _id: 293,
      films: [],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Arabella",
      name: "Arabella",
      imageUrl: "https://via.placeholder.com/210x295/%EF%AC%80%EF%AC%80%EF%AC%80/555555/?text=Disney",
      createdAt: "2021-04-12T01:33:24.447Z",
      updatedAt: "2021-04-12T01:33:24.447Z",
      url: "https://api.disneyapi.dev/characters/293",
      __v: 0,
    },
    {
      _id: 295,
      films: [],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: ["Tortuga Tavern"],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Arabella_Smith",
      name: "Arabella Smith",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/d/da/Bella_sign.webp",
      createdAt: "2021-04-12T01:33:25.599Z",
      updatedAt: "2021-12-20T20:39:20.361Z",
      url: "https://api.disneyapi.dev/characters/295",
      __v: 0,
    },
    {
      _id: 310,
      films: [],
      shortFilms: [],
      tvShows: ["DuckTales"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Queen_Ariel",
      name: "Queen Ariel",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/e/e8/Char_49883.jpg",
      createdAt: "2021-04-12T01:33:35.898Z",
      updatedAt: "2021-12-20T20:39:20.362Z",
      url: "https://api.disneyapi.dev/characters/310",
      __v: 0,
    },
    {
      _id: 327,
      films: [],
      shortFilms: [],
      tvShows: ["Jungle Cubs"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Arthur_and_Cecil",
      name: "Arthur and Cecil",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/e/e9/Arthur_%26_Cecil.png",
      createdAt: "2021-04-12T01:33:46.377Z",
      updatedAt: "2021-12-20T20:39:20.362Z",
      url: "https://api.disneyapi.dev/characters/327",
      __v: 0,
    },
    {
      _id: 336,
      films: [],
      shortFilms: [],
      tvShows: ["Fillmore!"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Fiona_Ashbury",
      name: "Fiona Ashbury",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/e/ed/Fiona_Ashbury.jpg",
      createdAt: "2021-04-12T01:33:51.824Z",
      updatedAt: "2021-12-20T20:39:20.363Z",
      url: "https://api.disneyapi.dev/characters/336",
      __v: 0,
    },
    {
      _id: 337,
      films: ["Homeward Bound II: Lost in San Francisco"],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Ashcan_and_Pete",
      name: "Ashcan and Pete",
      imageUrl:
        "https://via.placeholder.com/210x295/%EF%AC%80%EF%AC%80%EF%AC%80/555555/?text=Disney",
      createdAt: "2021-04-12T01:33:52.329Z",
      updatedAt: "2021-12-20T20:39:20.363Z",
      url: "https://api.disneyapi.dev/characters/337",
      __v: 0,
    },
    {
      _id: 342,
      films: ["Bedtime Stories"],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Aspen",
      name: "Aspen",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/8/8b/Bedtime_stories_aspen.jpg",
      createdAt: "2021-04-12T01:33:56.674Z",
      updatedAt: "2021-12-20T20:39:20.872Z",
      url: "https://api.disneyapi.dev/characters/342",
      __v: 0,
    },
    {
      _id: 347,
      films: [],
      shortFilms: [],
      tvShows: ["The Lion Guard"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Astuto",
      name: "Astuto",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/3/3e/Lion_Guard_S03E014_-_Astuto_%28fox%29_Profile.jpg",
      createdAt: "2021-04-12T01:33:59.743Z",
      updatedAt: "2021-12-20T20:39:20.872Z",
      url: "https://api.disneyapi.dev/characters/347",
      __v: 0,
    },
    {
      _id: 350,
      films: ["Tomorrowland (film)"],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Athena_(Tomorrowland)",
      name: "Athena",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/d/db/Athena_Tomorrowland.jpg",
      createdAt: "2021-04-12T01:34:01.400Z",
      updatedAt: "2021-12-20T20:39:20.872Z",
      url: "https://api.disneyapi.dev/characters/350",
      __v: 0,
    },
    {
      _id: 364,
      films: ["Return to Oz"],
      shortFilms: [],
      tvShows: ["Once Upon a Time"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Aunt_Em",
      name: "Aunt Em",
      imageUrl: "https://static.wikia.nocookie.net/disney/images/5/5d/Em4.jpg",
      createdAt: "2021-04-12T01:34:11.118Z",
      updatedAt: "2021-12-20T20:39:20.873Z",
      url: "https://api.disneyapi.dev/characters/364",
      __v: 0,
    },
    {
      _id: 380,
      films: [],
      shortFilms: [],
      tvShows: ["Kim Possible"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Aviarius",
      name: "Aviarius",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/9/99/Aviarius.jpg",
      createdAt: "2021-04-12T01:34:21.583Z",
      updatedAt: "2021-12-20T20:39:20.873Z",
      url: "https://api.disneyapi.dev/characters/380",
      __v: 0,
    },
    {
      _id: 384,
      films: [],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Prince_Axel",
      name: "Prince Axel",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/8/81/Prince_Axel.png",
      createdAt: "2021-04-12T01:34:23.830Z",
      updatedAt: "2021-12-20T20:39:20.873Z",
      url: "https://api.disneyapi.dev/characters/384",
      __v: 0,
    },
    {
      _id: 404,
      films: [],
      shortFilms: [],
      tvShows: ["PB&J Otter"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Baby_Butter_Otter",
      name: "Butter Otter",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/1/15/Peanut_butter_and_jelly_otter_4.png",
      createdAt: "2021-04-12T01:34:35.674Z",
      updatedAt: "2021-12-20T20:39:21.335Z",
      url: "https://api.disneyapi.dev/characters/404",
      __v: 0,
    },
    {
      _id: 410,
      films: [],
      shortFilms: [],
      tvShows: ["Timon & Pumbaa"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Baby_Panda_(Timon_%26_Pumbaa)",
      name: "Baby Panda",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/d/dd/X240-pex.jpg",
      createdAt: "2021-04-12T01:34:38.957Z",
      updatedAt: "2021-12-20T20:39:21.335Z",
      url: "https://api.disneyapi.dev/characters/410",
      __v: 0,
    },
    {
      _id: 440,
      films: [],
      shortFilms: [],
      tvShows: ["Mackenzie Falls"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Marta_Balatico",
      name: "Marta Balatico",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/d/d0/27_marta.jpg",
      createdAt: "2021-04-12T01:34:56.629Z",
      updatedAt: "2021-12-20T20:39:21.786Z",
      url: "https://api.disneyapi.dev/characters/440",
      __v: 0,
    },
    {
      _id: 442,
      films: [],
      shortFilms: [],
      tvShows: ["Fish Hooks"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Mr._Baldwin",
      name: "Mr. Baldwin",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/2/2c/Baldwin_picture.png",
      createdAt: "2021-04-12T01:34:57.806Z",
      updatedAt: "2021-12-20T20:39:21.786Z",
      url: "https://api.disneyapi.dev/characters/442",
      __v: 0,
    },
    {
      _id: 450,
      films: [
        "The Jungle Book",
        "The Jungle Book 2",
        "Rudyard Kipling's The Jungle Book",
        "The Jungle Book: Mowgli's Story",
        "Mickey's Magical Christmas: Snowed in at the House of Mouse",
        "Mickey's House of Villains",
        "The Lion King 1½",
        "Meet the Robinsons",
        "The Jungle Book (2016 film)",
      ],
      shortFilms: [],
      tvShows: [
        "The Mouse Factory",
        "TaleSpin",
        "Raw Toonage",
        "Aladdin (TV series)",
        "Jungle Cubs",
        "House of Mouse",
        "DuckTales (2017 series)",
      ],
      videoGames: [
        "TaleSpin (NES video game)",
        "TaleSpin (Sega Genesis Video Game)",
        "The Jungle Book (video game)",
        "The Jungle Book Groove Party",
        "Disney Universe",
        "Kinect Disneyland Adventures",
        "Disney Infinity (series)",
        "Disney Crossy Road",
        "Disney Emoji Blitz",
        "Disney Magic Kingdoms",
        "Kingdom Hearts Union χ",
        "Disney Heroes: Battle Mode",
        "Disney Sorcerer's Arena",
        "Just Dance: Disney Party",
      ],
      parkAttractions: [
        "The Disney Afternoon Live!: Plane Crazy",
        "Mickey's Magical TV World",
        "Fantasmic!",
        "It's a Small World",
        "Mickey Mouse Revue",
        "Celebrate a Dreams Come True Parade",
        "Mickey's Jammin' Jungle Parade",
        "Mickey's Jingle Jungle Parade",
        "Disney Stars and Motorcars Parade",
        "Parade of the Stars",
        "World of Color",
        "Mickey and the Wondrous Book",
        "La Forêt de l'Enchantement: Une aventure musicale Disney",
        "Happily Ever After (fireworks show)",
      ],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Baloo",
      name: "Baloo",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/3/31/Profile_-_Baloo.jpeg",
      createdAt: "2021-04-12T01:35:02.338Z",
      updatedAt: "2021-12-20T20:39:21.786Z",
      url: "https://api.disneyapi.dev/characters/450",
      __v: 0,
    },
    {
      _id: 469,
      films: ["Mary Poppins (film)", "Mary Poppins Returns"],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Michael_Banks",
      name: "Michael Banks",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/4/40/Michael_Banks.gif",
      createdAt: "2021-04-12T01:35:13.656Z",
      updatedAt: "2021-12-20T20:39:21.786Z",
      url: "https://api.disneyapi.dev/characters/469",
      __v: 0,
    },
    {
      _id: 474,
      films: [],
      shortFilms: [],
      tvShows: ["Chip 'n Dale Rescue Rangers"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl:
        "https://disney.fandom.com/wiki/Banshee_(Chip_%27n_Dale_Rescue_Rangers)",
      name: "Banshee",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/5/54/Chip_%27n_Dale_Rescue_Rangers_226_The_Last_Leprechaun_arsenaloyal_-_YouTube12.jpg",
      createdAt: "2021-04-12T01:35:16.266Z",
      updatedAt: "2021-12-20T20:39:21.786Z",
      url: "https://api.disneyapi.dev/characters/474",
      __v: 0,
    },
    {
      _id: 490,
      films: [],
      shortFilms: [],
      tvShows: ["Teamo Supremo"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Baron_Blitz",
      name: "Baron Blitz",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/4/4b/Baron_Blitz.jpg",
      createdAt: "2021-04-12T01:35:26.026Z",
      updatedAt: "2021-12-20T20:39:22.406Z",
      url: "https://api.disneyapi.dev/characters/490",
      __v: 0,
    },
    {
      _id: 500,
      films: ["The Sword in the Stone"],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Sir_Bart",
      name: "Sir Bart",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/6/6d/Sword-in-stone-disneyscreencaps.com-8698.jpg",
      createdAt: "2021-04-12T01:35:31.366Z",
      updatedAt: "2021-12-20T20:39:22.406Z",
      url: "https://api.disneyapi.dev/characters/500",
      __v: 0,
    },
    {
      _id: 529,
      films: [],
      shortFilms: [],
      tvShows: ["Fillmore!"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Bernice_Beachmont",
      name: "Bernice Beachmont",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/e/e1/Bernice_Beachmont.jpg",
      createdAt: "2021-04-12T01:35:48.740Z",
      updatedAt: "2021-12-20T20:39:22.407Z",
      url: "https://api.disneyapi.dev/characters/529",
      __v: 0,
    },
    {
      _id: 543,
      films: [],
      shortFilms: [],
      tvShows: ["Jake and the Never Land Pirates"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Beardini_the_Pirate_Magician",
      name: "Beardini the Pirate Magician",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/2/27/Beardini01.jpg",
      createdAt: "2021-04-12T01:35:57.020Z",
      updatedAt: "2021-12-20T20:39:23.086Z",
      url: "https://api.disneyapi.dev/characters/543",
      __v: 0,
    },
    {
      _id: 566,
      films: ["The Haunted Mansion (film)"],
      shortFilms: [],
      tvShows: [],
      videoGames: [
        "The Haunted Mansion (video game)",
        "Kinect Disneyland Adventures",
        "Disney Crossy Road",
      ],
      parkAttractions: ["The Haunted Mansion"],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Beheaded_Knight",
      name: "Beheaded Knight",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/f/fb/Beheaded_Knight.png",
      createdAt: "2021-04-12T01:36:13.468Z",
      updatedAt: "2021-12-20T20:39:23.086Z",
      url: "https://api.disneyapi.dev/characters/566",
      __v: 0,
    },
    {
      _id: 157,
      films: ["Freaky Friday (2003 film)"],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Alan_Coleman",
      name: "Alan Coleman",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/c/c0/Alan_Coleman.jpg",
      createdAt: "2021-04-12T01:31:58.659Z",
      updatedAt: "2021-12-20T20:39:18.877Z",
      url: "https://api.disneyapi.dev/characters/157",
      __v: 0,
    },
    {
      _id: 189,
      films: [],
      shortFilms: [],
      tvShows: ["Doc McStuffins"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Alma",
      name: "Alma",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/6/6b/SadAlma.png",
      createdAt: "2021-04-12T01:32:19.873Z",
      updatedAt: "2021-12-20T20:39:19.408Z",
      url: "https://api.disneyapi.dev/characters/189",
      __v: 0,
    },
    {
      _id: 206,
      films: ["Treasure Planet"],
      shortFilms: [],
      tvShows: [],
      videoGames: [
        "Treasure Planet: Battle at Procyon",
        "Disney Sorcerer's Arena",
        "Disney Heroes: Battle Mode",
      ],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Captain_Amelia",
      name: "Captain Amelia",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/0/0c/Profile_-_Captain_Amelia.png",
      createdAt: "2021-04-12T01:32:30.244Z",
      updatedAt: "2021-12-20T20:39:19.408Z",
      url: "https://api.disneyapi.dev/characters/206",
      __v: 0,
    },
    {
      _id: 207,
      films: [],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Amelia_Duckworth",
      name: "Amelia Duckworth",
      imageUrl: "https://via.placeholder.com/210x295/ffffff/555555/?text=Disney",
      createdAt: "2021-04-12T01:32:30.828Z",
      updatedAt: "2021-04-12T01:32:30.828Z",
      url: "https://api.disneyapi.dev/characters/207",
      __v: 0,
    },
    {
      _id: 223,
      films: ["The Cat from Outer Space"],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Captain_Anderson",
      name: "Captain Anderson",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/b/bc/CaptainAndersonCatFromSpace.jpg",
      createdAt: "2021-04-12T01:32:40.186Z",
      updatedAt: "2021-12-20T20:39:19.408Z",
      url: "https://api.disneyapi.dev/characters/223",
      __v: 0,
    },
    {
      _id: 241,
      films: [],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Erica_Ange",
      name: "Erica Ange",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/8/88/Erica_pic.png",
      createdAt: "2021-04-12T01:32:50.879Z",
      updatedAt: "2021-12-20T20:39:19.912Z",
      url: "https://api.disneyapi.dev/characters/241",
      __v: 0,
    },
    {
      _id: 247,
      films: [],
      shortFilms: [],
      tvShows: ["Fish Hooks"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Angela_Fishberger",
      name: "Angela",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/c/cb/Angela_Fishberger.jpg",
      createdAt: "2021-04-12T01:32:54.541Z",
      updatedAt: "2021-12-20T20:39:19.912Z",
      url: "https://api.disneyapi.dev/characters/247",
      __v: 0,
    },
    {
      _id: 268,
      films: ["The Happiest Millionaire"],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Anthony_Biddle",
      name: "Anthony Biddle",
      imageUrl:
        "https://via.placeholder.com/210x295/%EF%AC%80%EF%AC%80%EF%AC%80/555555/?text=Disney",
      createdAt: "2021-04-12T01:33:08.833Z",
      updatedAt: "2021-12-20T20:39:19.913Z",
      url: "https://api.disneyapi.dev/characters/268",
      __v: 0,
    },
    {
      _id: 278,
      films: ["Savage Sam"],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Apaches",
      name: "Apaches",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/0/0e/Old-yeller-2-movie-collection-20060206040952451-000.jpg",
      createdAt: "2021-04-12T01:33:14.678Z",
      updatedAt: "2021-12-20T20:39:19.913Z",
      url: "https://api.disneyapi.dev/characters/278",
      __v: 0,
    },
    {
      _id: 285,
      films: [],
      shortFilms: [],
      tvShows: ["Amphibia"],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Apothecary_Gary",
      name: "Apothecary Gary",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/a/aa/ApothecaryGary.png",
      createdAt: "2021-04-12T01:33:18.798Z",
      updatedAt: "2021-12-20T20:39:19.913Z",
      url: "https://api.disneyapi.dev/characters/285",
      __v: 0,
    },
    {
      _id: 291,
      films: [],
      shortFilms: [],
      tvShows: [],
      videoGames: [
        "Kingdom Hearts: Birth by Sleep",
        "Kingdom Hearts coded",
        "Kingdom Hearts 3D: Dream Drop Distance",
        "Kingdom Hearts HD II.8 Final Chapter Prologue",
        "Kingdom Hearts III",
        "Disney Emoji Blitz",
        "Disney Tsum Tsum",
      ],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Aqua",
      name: "Aqua",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/0/0a/Aqua_KHIII.png",
      createdAt: "2021-04-12T01:33:23.402Z",
      updatedAt: "2021-12-20T20:39:20.361Z",
      url: "https://api.disneyapi.dev/characters/291",
      __v: 0,
    },
    {
      _id: 303,
      films: [],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: ["Tower of Terror"],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Archibald_Smelding",
      name: "Archibald Smelding",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/a/a6/Archibald_Smelding.jpg",
      createdAt: "2021-04-12T01:33:30.627Z",
      updatedAt: "2021-12-20T20:39:20.361Z",
      url: "https://api.disneyapi.dev/characters/303",
      __v: 0,
    },
    {
      _id: 322,
      films: ["Treasure Planet"],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Mr._Arrow",
      name: "Mr. Arrow",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/5/51/Profile_-_Mr._Arrow.png",
      createdAt: "2021-04-12T01:33:43.750Z",
      updatedAt: "2021-12-20T20:39:20.362Z",
      url: "https://api.disneyapi.dev/characters/322",
      __v: 0,
    },
    {
      _id: 351,
      films: [
        "The Little Mermaid: Ariel's Beginning",
        "The Little Mermaid (live-action film)",
      ],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "https://disney.fandom.com/wiki/Queen_Athena",
      name: "Queen Athena",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/4/41/Athena_TLM.jpg",
      createdAt: "2021-04-12T01:34:01.940Z",
      updatedAt: "2021-12-20T20:39:20.872Z",
      url: "https://api.disneyapi.dev/characters/351",
      __v: 0,
    },
  ];

const renderOneCharacter = (characterObj) => {
    const html = `
        <li class="js_character characters__item" id="${characterObj._id}">
            <img class="characters__img" src="${characterObj.imageUrl}">
            <h4 class="characters__name">${characterObj.name}</h4>
        </li>`;

    return html;
};

const renderAllCharacters = () => {
  let html = '';
  
  for (const characterObj of allCharacters){
      html += renderOneCharacter(characterObj);
  }
  characterUl.innerHTML = html;

  const allCharactersLi = document.querySelectorAll('.js_character');

  for (const li of allCharactersLi){
    li.addEventListener('click', handleTheBest);
  }
}

const handleTheBest = (ev) => {
  ev.currentTarget.classList.toggle('thebest');

  const clickedId = parseInt(ev.currentTarget.id, 10);

  const clickedCharacterObj = allCharacters.find((eachCharacter) => eachCharacter._id === clickedId);

  const liFavourite = renderOneCharacter(clickedCharacterObj);
  
  favouritesUl.innerHTML = liFavourite;

}

fetch('https://api.disneyapi.dev/character?pageSize=50')
  .then((response) => response.json())
  .then((data) => {
    allCharacters = data.data;

    renderAllCharacters();
  });