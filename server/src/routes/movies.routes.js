const router = require('express').Router();
const { getAllMovies, getMovie, newMovie, editMovie, removeMovie, searchMovies } = require('../controllers/moviesController'); // require controllers

const movieValidator = require('../validations/movieValidator');
// validations

const validationFields = require('../middlewares/validationFields');
// mapea y muestra los errores que encuentre en los campos del formulario y evita que llegue a los controladores

const validationJWT = require('../middlewares/validationJWT');
router.use(validationJWT);
// hacemos uso del middleware de aplicacion para verificar que el usuario tenga un token válido al estar logueado



/*    /movies    */

router
    .get('/search', validationFields, searchMovies)  
//   search series or movies

    .get('/', getAllMovies)  
//   get all series and movies  

    .get('/:id', validationFields, getMovie)  
//   get details movie or serie

    .post('/new', movieValidator, validationFields, newMovie)  
//   create a new movie  

    .put('/edit/:id', movieValidator, validationFields, editMovie) 
//   edit a movie

    .delete('/delete/:id', validationFields, removeMovie)  
//   delete a movie

   

    
module.exports = router;