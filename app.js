"use strict";

require("dotenv").config();
const express  = require("express");
const app = express();

// routes modules, variable name here doesn't have to match the route it calls
const routes = require("./routes/")

// middleware: example below
const requestTime = (req, res, next) => {
  req.requestedTime = Date.now();
  next();
}
//
// app.use(requestTime);

app.use(express.static(__dirname + "/public"));

app.use(requestTime);

app.use(routes);



app.use( (req, res, next)=> {
  res.send(`what?`);
})


const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
});

//yay
