
const getUrl = (req) => req.protocol + '://' + req.get('host') + req.originalUrl;

module.exports = {

    getAllGenres: async (req, res) => {
        res.json('hola mundo')
    },
    genreDetail: async (req, res) => {
        res.json('hola mundo')
    },
    newGenre: async (req, res) => {
        res.json('hola mundo')
    },
    editGenre: async (req, res) => {
        res.json('hola mundo')
    },
    removeGenre: async (req, res) => {
        res.json('hola mundo')
    }
    
}
