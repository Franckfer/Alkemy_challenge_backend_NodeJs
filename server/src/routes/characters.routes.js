const router = require('express').Router();
const { 
    getCharacter, 
    getCharacterList, 
    newCharacter, 
    editCharacter, 
    removeCharacter, 
    searchCharacters 
} = require('../controllers/charactersController'); // require controllers

const characterValidator = require('../validations/characterValidator');
// validations

const validationFields = require('../middlewares/validationFields');
// mapea y muestra los errores que encuentre en los campos del formulario y evita que llegue a los controladores

const validationJWT = require('../middlewares/validationJWT');
router.use(validationJWT);
// hacemos uso del middleware de aplicacion para verificar que el usuario tenga un token válido al estar logueado




/*   /characters   */

router
    .get('/search', validationFields, searchCharacters)  
//   search characters

    .get('/', getCharacterList)  
//   get all characters  

    .get('/:id', validationFields, getCharacter)  
//   get character details  

    .post('/new', characterValidator, validationFields, newCharacter)  
//   create a new character  

    .put('/edit/:id', characterValidator, validationFields, editCharacter) 
//   edit a character

    .delete('/delete/:id', validationFields, removeCharacter)  
//   delete a character

    


    
module.exports = router;