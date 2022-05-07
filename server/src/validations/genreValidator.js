const { body } = require('express-validator');

module.exports = [

    body('name')
        .isString()
        .withMessage('You must enter a text string')
        .trim()
        .notEmpty()
        .escape()
        .withMessage('The genre name cannot be empty'),

    body('image')
        .trim()
        .notEmpty()
        .escape()
        .withMessage('You must enter an image'),

]