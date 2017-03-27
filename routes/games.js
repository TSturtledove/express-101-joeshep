const { Router} = require("express");
const path = require("path");

const gameRouter = Router();

gameRouter.get("/boardgames", (req, res, next) =>{
  console.log("game stuff");
  res.sendFile(path.join(__dirname, "../public", "boardgames.html"));
});

gameRouter.get("/videogames", (req, res, next) => {
  console.log("nope");
  res.send(`<h3>Search for games<h3><form method="POST"><input type="text"><button type="submit">push</button></form>`);
});

gameRouter.post("/videogmes", (req, res, next)=> {
  console.log("submitting a form post request for videogames");
  // res.send("go outside and play");
  next();
});

module.exports = gameRouter;
