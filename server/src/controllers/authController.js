const getUrl = (req) => req.protocol + '://' + req.get('host') + req.originalUrl;

module.exports = {

    login: async (req, res) => {
        res.json('hola mundo')
    },
    register: async (req, res) => {
        res.json('hola mundo')
    }
    
}
