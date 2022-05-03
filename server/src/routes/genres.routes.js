const router = require('express').Router();
const { 
    getAllGenres, 
    genreDetail, 
    newGenre, 
    editGenre
} = require('../controllers/genresController'); // require controllers



/*   /genres   */
router
    .get('/', getAllGenres)  
//   get list of genres  

    .get('/details/:id', genreDetail)  
//   get genre detail

    .post('/new', newGenre)  
//   create a new genre  

    .put('/edit/:id', editGenre) 
//   edit a genre



    
module.exports = router;