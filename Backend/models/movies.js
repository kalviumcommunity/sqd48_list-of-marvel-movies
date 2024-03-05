// models/movies.js
const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: String,
    year: Number, // Ensure this matches the structure you're expecting in the frontend
    director: String,
    rating: Number
});

const MovieModel = mongoose.model('movie', MovieSchema);

module.exports = MovieModel;
