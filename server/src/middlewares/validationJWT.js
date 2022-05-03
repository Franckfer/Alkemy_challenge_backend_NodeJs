const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {

    // x-token -->> headers
    const token = req.header('x-token');

    if(!token) {
        return res.status(401).json({
            success: false,
            message: 'There is no token in the request.'
        })
    }

    try {

        const payload = jwt.verify(token, process.env.SECRET_JWT || 'mycode'); 
        // verifico la validez del token

        req.id = payload.id; // recupero del request, el id del payload(token)
        req.name = payload.name;
        
    } catch (error) {
    
        return res.status(401).json({
            success: false,
            message: 'Invalid token'
        })
    }

    next();

}