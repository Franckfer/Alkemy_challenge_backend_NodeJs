const { body } = require('express-validator');

module.exports = [

    body('name')
        .trim()
        .notEmpty()
        .withMessage('Enter a valid name')
        .isString()
        .withMessage('You must enter a text string')
        .escape()
        .isLength({ min: 2 })
        .withMessage('The name must have at least two characters'),
        
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
        .withMessage('The password must be at least 6 characters')
        
]