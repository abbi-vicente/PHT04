require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/posts", require("./src/routes/post"));

// Database
mongoose
  .connect(
    "mongodb+srv://isabellouiseph:ABtc81ijT0dwxDEr@cluster0.9rtuler.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen("4000", () => {
      console.log(`Listening on port 4000 and connected to MongoDB`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error.message);
  });
