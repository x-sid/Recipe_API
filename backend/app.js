const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
const recipeRoutes = require("./routes/recipe");

const app = express();

mongoose
  .connect(
    "mongodb+srv://sidney:sidney55@cluster0-of6ko.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    () => console.log("server running...")
  )
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch(error => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParse.json());

app.use("/api/recipes", recipeRoutes);

module.exports = app;
