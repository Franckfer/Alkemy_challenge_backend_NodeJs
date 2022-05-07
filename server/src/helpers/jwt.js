const jwt = require('jsonwebtoken');

const JWTGenerator = (id, name) => {

    return new Promise( (resolve, reject) => {

        const payload = {
            id, 
            name
        }

        jwt.sign(
            payload, 
            process.env.SECRET_JWT || 'mycode', 
            { expiresIn: '4h' },
            (error, token) => {
                
                if (error) {
                    console.log(error);
                    return reject('No se pudo generar el token')
                }

                return resolve(token)

            }
        )
        // jwt.sign() recibe cuatro parametros 
        // en el primer parametro los datos a encriptar/guardar
        // en el segundo una clave secreta
        // en el tercer parametro una configuracion en este caso cuanto va a durar el token activo
        // y como ultimo param. un callback(cb) que nos devuelve el resultado de la promesa
    })
}



module.exports = JWTGenerator;