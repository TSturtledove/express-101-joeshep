const {Router} = require("express");
const path = require("path");

const animalRouter = Router();

// animalRouter.use(function(req, res, next) {
//   if (req.user === "farmer") {
//     next()
//   }else {
//     res.status(403).send("forbidden")
//   }
// })


animalRouter.get("/monkeys", (req, res, next)=> {
  console.log("fetching some monkeys");
  console.log(`This ran at ${req.requestedTime}`)
  res.sendFile(path.join(__dirname, "../public","monkeys.html"));
});

animalRouter.get("/chickens", (req, res, next)=> {
  console.log("looking for chickens");
  res.send(`<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>`)
});

animalRouter.post("/chickens", (req, res, next)=> {
  console.log("posting a form for chickens");
});

module.exports = animalRouter;
