
const getUrl = (req) => req.protocol + '://' + req.get('host') + req.originalUrl;

module.exports = {

    getCharacterList: async (req, res) => {
        res.json('hola mundo')
    },
    getCharacter: async (req, res) => {
        res.json('hola mundo')
    },
    newCharacter: async (req, res) => {
        res.json('hola mundo')
    },
    editCharacter: async (req, res) => {
        res.json('hola mundo')
    },
    removeCharacter: async (req, res) => {
        res.json('hola mundo')
    },
    searchCharacters: async (req, res) => {
        res.json('hola mundo')
    },
    
}
