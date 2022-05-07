const router = require('express').Router();
const { getAllGenres, genreDetail, newGenre, editGenre } = require('../controllers/genresController'); // require controllers

const genreValidator = require('../validations/genreValidator');
// validations

const validationFields = require('../middlewares/validationFields');
// mapea y muestra los errores que encuentre en los campos del formulario y evita que llegue a los controladores

const validationJWT = require('../middlewares/validationJWT');
router.use(validationJWT);
// hacemos uso del middleware de aplicacion para verificar que el usuario tenga un token válido al estar logueado




/*    /genres    */

router
    .get('/', getAllGenres)  
//   get list of genres  

    .get('/details/:id', validationFields, genreDetail)  
//   get genre detail

    .post('/new', genreValidator, validationFields, newGenre)  
//   create a new genre  

    .put('/edit/:id', genreValidator, validationFields, editGenre) 
//   edit a genre



    
module.exports = router;