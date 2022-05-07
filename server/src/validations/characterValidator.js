const { body } = require('express-validator');

module.exports = [

    body('image')
        .trim()
        .notEmpty()
        .escape()
        .withMessage('You must enter an image'),

    body('name')
        .trim()
        .notEmpty()
        .withMessage('Enter a valid name')
        .isString()
        .withMessage('You must enter a text string')
        .escape()
        .withMessage('You must put the name of the character'),

    body('age')
        .isString()
        .withMessage('Must be in string format. example: 300 years')
        .trim()
        .notEmpty()
        .escape()
        .withMessage('You must enter the age of the character'),

    body('weight')
        .isString()
        .withMessage('Must be in string format. example: 10 kg')
        .trim()
        .notEmpty()
        .escape()
        .withMessage('You must put the weight of the character'),

    body('story')
        .isString()
        .withMessage('You must enter a text string')
        .trim()
        .notEmpty()
        .escape()
        .withMessage('You must put the history of the character.')

]