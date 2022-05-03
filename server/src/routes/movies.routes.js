const router = require('express').Router();
const { 
    getAllMovies, 
    getMovie, 
    newMovie, 
    editMovie, 
    removeMovie, 
    searchMovies 
} = require('../controllers/moviesController'); // require controllers




/*   /movies   */
router
    .get('/search', searchMovies)  
//   search series or movies

    .get('/', getAllMovies)  
//   get all series and movies  

    .get('/:id', getMovie)  
//   get details movie or serie

    .post('/new', newMovie)  
//   create a new movie  

    .put('/edit/:id', editMovie) 
//   edit a movie

    .delete('/delete/:id', removeMovie)  
//   delete a movie

   

    
module.exports = router;