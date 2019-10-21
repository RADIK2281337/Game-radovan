const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Game = require("./models/Game");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://fuck228:fuck228@ds143070.mlab.com:43070/radovan", {
  useNewUrlParser: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("connected to  db");
});

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello");
});



// parse application/json
app.use(bodyParser.json());

app.post("/api/games", (req, res) => {
//   const {
//     title,
//     author,
//     discription,
//     date,
//     dateOfPublish,
//     developer,
//     ganre
//   } = req.body;

  const newGame = new Game({
    // title,
    // author,
    // discription,
    // date,
    // dateOfPublish,
    // developer,
    // ganre
    ...req.body
  });

  console.log(newGame);

  newGame
    .save()
    .then(game => res.send(game))
    .catch(err => console.log(err));
});

app.get("/api/games", (req, res) => {
  Game.find()
    .then(game => res.send(game))
    .catch(err => console.log(err));
});


app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
