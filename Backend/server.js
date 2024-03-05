// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Make sure to install the cors package
require("dotenv").config();

const app = express();
const port = process.env.PUBLIC_PORT || 3000;

app.use(cors()); // Use CORS to avoid cross-origin issues
app.use(express.json());

const MovieModel = require('./models/movies'); // Adjust the path as necessary

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to DB"))
.catch((error) => console.error("Could not connect to MongoDB:", error));

app.get("/movies", async (req, res) => {
  try {
    const movies = await MovieModel.find({});
    res.json(movies);
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
