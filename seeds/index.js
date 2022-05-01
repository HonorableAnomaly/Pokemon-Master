const mongoose = require("mongoose");
const Pokemon = require("../models/pokemon");
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

mongoose.connect("mongodb://localhost:27017/pokemon"),
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

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const singleSeed = async () => {
  await Pokemon.deleteMany({});
  const pokemon = new Pokemon({
    name: `${Pokemon.name}`,
    number: `${i}`,
    power: `${Pokemon.type}`,
    sprite: `${baseURL}${i}.png`,
    region: `${Pokemon.region}`,
    bio: `${Pokemon.bio}`,
  });
  await pokemon.save();
};

// const seedDB = async () => {
//   await Pokemon.deleteMany({});
//   for (let i = 1; i <= 906; i++) {
//     const pokemon = new Pokemon({
//       name: String,
//       number: `${i}`,
//       power: `${Pokemon.type}`,
//       sprite: `${baseURL}${i}.png`,
//       region: `${Pokemon.region}`,
//       bio: `${Pokemon.bio}`,
//     });
//     await pokemon.save();
//   }
// };

singleSeed().then(() => {
  mongoose.connection.close();
});

// seedDB().then(() => {
//   mongoose.connection.close();
// });
