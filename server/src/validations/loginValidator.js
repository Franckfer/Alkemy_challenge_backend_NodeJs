const { body } = require('express-validator');

module.exports = [

    body('email')
        .trim()
        .notEmpty()
        .withMessage('The email is required')
        .isEmail()
        .normalizeEmail()
        .withMessage('Please enter a valid email address'),

    body('password')
        .trim()
        .notEmpty()
        .withMessage('Password is required')
        .escape()
        .isLength({ min: 6 })
        .withMessage('The password must be at least 6 character')
        
]