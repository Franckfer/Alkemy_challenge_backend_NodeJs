const router = require('express').Router();
const { login, register } = require('../controllers/authController');
// require controllers

const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');
// validations

const validationFields = require('../middlewares/validationFields');
// mapea y muestra los errores que encuentre en los campos del formulario y evita que llegue a los controladores



/*   /auth    */

router
    .post('/login', loginValidator, validationFields, login)
//   user login

    .post('/register', registerValidator, validationFields, register)
//   user register  




    
module.exports = router;