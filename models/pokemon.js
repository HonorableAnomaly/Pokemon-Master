const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
  name: String,
  number: Number,
  type: String,
  evolution: String,
  generation: String,
  region: String,
  bio: String,
  sprite: String,
});

module.exports = mongoose.model("Pokemon", PokemonSchema);
