const mongoose = require("mongoose");
const Pokemon = require("../models/pokemon");
const seedPokemon = require("./seedPokemon");
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

mongoose.connect("mongodb://localhost:27017/pokemon-master"),
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected...");
});

// const singleSeed = async () => {
//   // await Pokemon.deleteMany({});
//   const pokemon = new Pokemon({
//     name: "Bulbasaur",
//     number: 1,
//     type: "Grass",
//     sprite: "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png",
//     region: "Kanto",
//     bio: `Bulbasaur is a small, quadrupedal amphibian Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.

//     As mentioned in the anime, starter Pokémon are raised by Breeders to be distributed to new Trainers. Having been domesticated from birth, Bulbasaur is regarded as both a rare and well-behaved Pokémon. It is known to be extremely loyal, even after long-term abandonment. Bulbasaur in the anime have demonstrated a nurturing instinct towards younger, weaker Pokémon, one individual even using its vines to pick up a crying Pokémon, gently rocking it back and forth through the air while singing a "Bulba-by".

//     It is found in grasslands and forests throughout the Kanto region. However, due to Bulbasaur's status as starter Pokémon, it is hard to come by in the wild and generally found under the ownership of a Trainer. It has been observed that a Bulbasaur's bulb will flash blue when it is ready to evolve. If it does not want to evolve, it struggles to resist the transformation. Many Bulbasaur gather every year in a hidden garden in Kanto to evolve into Ivysaur in a ceremony led by a Venusaur.`,
//   });
//   console.log(pokemon);
//   // await pokemon.save();
// };

const seedDB = async () => {
  // await Pokemon.deleteMany({});
  for (let i = 1; i <= 3; i++) {
    // for (let i = 1; i <= 906; i++) {
    const pokemon = new Pokemon({
      name: `${seedPokemon.name}`,
      number: `${i}`,
      type: `${seedPokemon.type}`,
      evolution: `${seedPokemon.evolution}`,
      generation: `${seedPokemon.generation}`,
      region: `${seedPokemon.region}`,
      bio: `${seedPokemon.bio}`,
      sprite: `${baseURL}${i}.png`,
    });
    console.log(pokemon);
    // await pokemon.save();
  }
};

// singleSeed().then(() => {
//   mongoose.connection.close();
// });

seedDB().then(() => {
  mongoose.connection.close();
});
