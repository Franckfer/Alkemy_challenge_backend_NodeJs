const router = require('express').Router();
const { 
    getAllGenres, 
    genreDetail, 
    newGenre, 
    editGenre, 
    removeGenre 
} = require('../controllers/genresController'); // require controllers



/*   /genres   */
router
    .get('/', getAllGenres)  
//   get list of genres  

    .get('/details/:id', genreDetail)  
//   get genre detail

    .post('/new', newGenre)  
//   create a new genre  

    .put('/:id/edit', editGenre) 
//   edit a genre

    .delete('/delete/:id', removeGenre)  
//   delete a genre


    
module.exports = router;