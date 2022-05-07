const { body } = require('express-validator');

module.exports = [

    body('image')
        .trim()
        .notEmpty()
        .escape()
        .withMessage('You must enter an image'),

    body('title')
        .isString()
        .withMessage('You must enter a text string')
        .trim()
        .notEmpty()
        .escape()
        .withMessage('You must add the title of the movie.'),

    body('rating')
        .trim()
        .notEmpty()
        .escape()
        .withMessage('Rating is mandatory')
        .isNumeric()
        .isLength({ min: 1 })
        .isFloat({ min: 1, max: 5 })
        .withMessage('The rating must be a number between 1 and 5'),

    body('genre_id')
        .trim()
        .notEmpty()
        .escape()
        .withMessage('Genre id is mandatory')
        .isNumeric()
        .withMessage('Must choose the gender identification number'),

]