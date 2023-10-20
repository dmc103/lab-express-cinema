const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//List of movies page
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(movies => {
        res.render('movies', {movies});
    })
    .catch(error => {
        console.log('Something went wrong:', error);
    });
})


module.exports = router;
