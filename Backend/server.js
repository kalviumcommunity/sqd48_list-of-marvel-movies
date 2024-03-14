const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

const app = express();
const port = process.env.PUBLIC_PORT || 3000;

app.use(cors());
app.use(express.json());

// Models
const MovieModel = require('./models/movies'); // Adjust the path as necessary
const ReviewModel = require('./models/Review'); // Adjust the path as necessary

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to DB"))
.catch((error) => console.error("Could not connect to MongoDB:", error));

// Fetch all movies
app.get("/movies", async (req, res) => {
  try {
    const movies = await MovieModel.find({});
    res.json(movies);
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add a new review
app.post("/reviews", async (req, res) => {
  try {
    const newReview = new ReviewModel(req.body);
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    console.error("Failed to add review:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Fetch all reviews
app.get("/reviews", async (req, res) => {
  try {
    const reviews = await ReviewModel.find({});
    res.json(reviews);
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
