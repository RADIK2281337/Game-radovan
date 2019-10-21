const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: String,
  author: String,
  discription: {
    title: String,
    text: String
  },
  date: { type: Date, default: Date.now },
  dateOfPublish: { type: Date, default: Date.now },
  developer: String,
  ganre: String,
  image: String
});

module.exports = Game = mongoose.model("Game", gameSchema);
