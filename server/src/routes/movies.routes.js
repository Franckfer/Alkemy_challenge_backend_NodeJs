const router = require('express').Router();


/*   /movies   */
router
    .get('/', )  
//   get all characters  

    .get('/:id', )  
//   get character details  

    .post('/new', )  
//   create a new character  

    .put('/edit/:id', ) 
//   edit a character

    .delete('/delete/:id', )  
//   delete a character

    .get('/search')  
//   search character


    
module.exports = router;