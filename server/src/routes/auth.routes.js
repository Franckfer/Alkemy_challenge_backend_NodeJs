const router = require('express').Router();
const { login, register } = require('../controllers/authController');
// require controllers


/*   /auth    */
router
    .post('/login', login)
//   user login

    .post('/register', register)
//   user register  


    
module.exports = router;