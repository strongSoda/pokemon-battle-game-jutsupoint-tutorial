const pokemonData = [
  {
    name: "Bulbasaur",
    hp: 45,
    maxHp: 45,
    attack: 49,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    type: "Grass",
    attacks: [
      { name: "Tackle", damage: 5, accuracy: 0.9, uses: 10 },
      { name: "Vine Whip", damage: 7, accuracy: 0.8, uses: 5 },
    ],
  },
  {
    name: "Charmander",
    hp: 39,
    maxHp: 39,
    attack: 52,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    type: "Fire",
    attacks: [
      { name: "Scratch", damage: 4, accuracy: 0.95, uses: 10 },
      { name: "Ember", damage: 8, accuracy: 0.75, uses: 5 },
    ],
  },
  {
    name: "Squirtle",
    hp: 44,
    maxHp: 44,
    attack: 48,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    type: "Water",
    attacks: [
      { name: "Tackle", damage: 4, accuracy: 0.9, uses: 10 },
      { name: "Water Gun", damage: 7, accuracy: 0.8, uses: 5 },
    ],
  },
  {
    name: "Pikachu",
    hp: 35,
    maxHp: 35,
    attack: 55,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    type: "Electric",
    attacks: [
      { name: "Quick Attack", damage: 6, accuracy: 0.95, uses: 10 },
      { name: "Thunder Shock", damage: 9, accuracy: 0.8, uses: 5 },
    ],
  },
  {
    name: "Jigglypuff",
    hp: 115,
    maxHp: 115,
    attack: 45,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    type: "Normal",
    attacks: [
      { name: "Pound", damage: 5, accuracy: 0.9, uses: 10 },
      { name: "Body Slam", damage: 8, accuracy: 0.8, uses: 5 },
    ],
  },
  {
    name: "Meowth",
    hp: 40,
    maxHp: 40,
    attack: 45,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    type: "Normal",
    attacks: [
      { name: "Scratch", damage: 4, accuracy: 0.95, uses: 10 },
      { name: "Bite", damage: 7, accuracy: 0.85, uses: 5 },
    ],
  },
  {
    name: "Psyduck",
    hp: 50,
    maxHp: 50,
    attack: 52,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    type: "Water",
    attacks: [
      { name: "Scratch", damage: 4, accuracy: 0.95, uses: 10 },
      { name: "Water Gun", damage: 7, accuracy: 0.8, uses: 5 },
    ],
  },
  {
    name: "Machop",
    hp: 70,
    maxHp: 70,
    attack: 80,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    type: "Fighting",
    attacks: [
      { name: "Karate Chop", damage: 6, accuracy: 0.9, uses: 10 },
      { name: "Low Kick", damage: 9, accuracy: 0.75, uses: 5 },
    ],
  },
  {
    name: "Geodude",
    hp: 40,
    maxHp: 40,
    attack: 80,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    type: "Rock",
    attacks: [
      { name: "Tackle", damage: 4, accuracy: 0.9, uses: 10 },
      { name: "Rock Throw", damage: 8, accuracy: 0.8, uses: 5 },
    ],
  },
  {
    name: "Eevee",
    hp: 55,
    maxHp: 55,
    attack: 55,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    type: "Normal",
    attacks: [
      { name: "Quick Attack", damage: 6, accuracy: 0.95, uses: 10 },
      { name: "Bite", damage: 7, accuracy: 0.85, uses: 5 },
    ],
  },
  {
    name: "Snorlax",
    hp: 160,
    maxHp: 160,
    attack: 110,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    type: "Normal",
    attacks: [
      { name: "Body Slam", damage: 10, accuracy: 0.8, uses: 10 },
      { name: "Hyper Beam", damage: 15, accuracy: 0.7, uses: 5 },
    ],
  },
  {
    name: "Butterfree",
    hp: 60,
    maxHp: 60,
    attack: 45,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    type: "Bug/Flying",
    attacks: [
      { name: "Gust", damage: 5, accuracy: 0.9, uses: 10 },
      { name: "Confusion", damage: 8, accuracy: 0.75, uses: 5 },
    ],
  },
  {
    name: "Pidgeot",
    hp: 83,
    maxHp: 83,
    attack: 80,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    type: "Normal/Flying",
    attacks: [
      { name: "Wing Attack", damage: 7, accuracy: 0.9, uses: 10 },
      { name: "Quick Attack", damage: 6, accuracy: 0.95, uses: 5 },
    ],
  },
  {
    name: "Alakazam",
    hp: 55,
    maxHp: 55,
    attack: 135,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    type: "Psychic",
    attacks: [
      { name: "Psybeam", damage: 10, accuracy: 0.9, uses: 10 },
      { name: "Psychic", damage: 15, accuracy: 0.75, uses: 5 },
    ],
  },
  {
    name: "Gengar",
    hp: 60,
    maxHp: 60,
    attack: 130,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    type: "Ghost/Poison",
    attacks: [
      { name: "Shadow Ball", damage: 12, accuracy: 0.85, uses: 10 },
      { name: "Sludge Bomb", damage: 10, accuracy: 0.8, uses: 5 },
    ],
  },
  {
    name: "Rhydon",
    hp: 105,
    maxHp: 105,
    attack: 130,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    type: "Ground/Rock",
    attacks: [
      { name: "Rock Blast", damage: 10, accuracy: 0.9, uses: 10 },
      { name: "Earthquake", damage: 15, accuracy: 0.8, uses: 5 },
    ],
  },
  {
    name: "Gyarados",
    hp: 95,
    maxHp: 95,
    attack: 125,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    type: "Water/Flying",
    attacks: [
      { name: "Bite", damage: 9, accuracy: 0.85, uses: 10 },
      { name: "Hydro Pump", damage: 15, accuracy: 0.75, uses: 5 },
    ],
  },
  {
    name: "Lapras",
    hp: 130,
    maxHp: 130,
    attack: 85,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    type: "Water/Ice",
    attacks: [
      { name: "Ice Beam", damage: 12, accuracy: 0.85, uses: 10 },
      { name: "Surf", damage: 10, accuracy: 0.9, uses: 5 },
    ],
  },
  {
    name: "Ditto",
    hp: 48,
    maxHp: 48,
    attack: 48,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    type: "Normal",
    attacks: [{ name: "Struggle", damage: 5, accuracy: 1.0, uses: 10 }],
  },
  {
    name: "Dragonite",
    hp: 91,
    maxHp: 91,
    attack: 134,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    type: "Dragon/Flying",
    attacks: [
      { name: "Dragon Claw", damage: 10, accuracy: 0.9, uses: 10 },
      { name: "Hyper Beam", damage: 15, accuracy: 0.7, uses: 5 },
    ],
  },
  {
    name: "Mewtwo",
    hp: 106,
    maxHp: 106,
    attack: 154,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    type: "Psychic",
    attacks: [
      { name: "Psychic", damage: 15, accuracy: 0.9, uses: 10 },
      { name: "Aura Sphere", damage: 12, accuracy: 0.8, uses: 5 },
    ],
  },
];

export default pokemonData;
