const router = require('express').Router();
const { 
    getCharacter, 
    getCharacterList, 
    newCharacter, 
    editCharacter, 
    removeCharacter, 
    searchCharacters 
} = require('../controllers/charactersController') // require controllers


/*   /characters   */
router
    .get('/', getCharacterList)  
//   get all characters  

    .get('/:id', getCharacter)  
//   get character details  

    .post('/new', newCharacter)  
//   create a new character  

    .put('/edit/:id', editCharacter) 
//   edit a character

    .delete('/delete/:id', removeCharacter)  
//   delete a character

    .get('/search', searchCharacters)  
//   search characters


    
module.exports = router;