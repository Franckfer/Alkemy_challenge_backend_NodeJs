const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {

    const errors = validationResult(req);

    //si hay errores pasamos el status 400 y mostramos los errores que hayamos encontrado con mapped
    if(!errors.isEmpty()) {
        return res.status(400).json({
            success : false,
            errors : errors.mapped()
        })
    }

    next()

}