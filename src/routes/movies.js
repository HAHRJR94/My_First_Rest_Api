const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('../sample.json');

//Get movies
router.get('/', (req, res) => {
    res.json(movies);
});

//Add movie
router.post('/', (req, res) => {
    const { title, director, year, rating } = req.body;

    if (title && director && year && rating) {
        const id = movies.length + 1;
        const newMovie = {id, ...req.body};

        movies.push(newMovie);
        res.json(movies);
    }
    else{
        res.send('wrong request');
    }
});

//Upgrade movie
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, director, year, rating } = req.body;

    if (title && director && year && rating) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        
        res.json(movies);
    }
    else{
        res.status(500).send('there was an error. All fields are required');
    }
    
})

//Delete movie
router.delete('/:id', (req, res) => {
    const { id } = req.params; //->Obtenemos el id

    _.each(movies, (movie, i) => { //-> Recorre un arreglo
        if (movie.id == id) {
            movies.splice(i, 1); //-> Elimina la pelicula con el id que pasamos.
        }
    })

    res.send(movies);
});

module.exports = router;