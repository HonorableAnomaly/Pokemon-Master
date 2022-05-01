const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
  name: String,
  number: Number,
  power: String,
  sprite: String,
  region: String,
  bio: String,
});

module.exports = mongoose.model("Pokemon", PokemonSchema);
