const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },

    director: {
        type: String,
        required: true,
        trim: true
    },

    stars: [{
        type: String,
        required: true,
        trim: true,
    }],

    image: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        required: true,
        trim: true,
    },

    showtimes: [{
        type: String,
        required: true,
        trim: true,
    }],

});


const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

