const { Character, CharacterMovie } = require('../database/models');
const { Op } = require('sequelize');
const getUrl = (req) => req.protocol + '://' + req.get('host') + req.originalUrl;

module.exports = {

    getCharacterList: async (req, res) => {
        
        const characters = await Character.findAll({
            attributes: ['image', 'name']
        });


        if (characters.length === 0) {
            return res.status(404).json({
                success : false,
                message : 'Characters not found'
            });
        }
        
        return res.status(200).json({
            meta: {
                success: true,
                url: getUrl(req),
                total_characters: characters.length,
            },
            data: characters
        })
    },
    getCharacter: async (req, res) => {
        
        const { id } = req.params;
                    
        try {

            const character = await Character.findByPk(id, {
                include: [
                    { association: 'movies', attributes: ["title"] },
                ]
            });

            
            if (!character || character === null) {
                return res.status(404).json({
                    success: false,
                    message: 'Character not exist or wrong id',
                });
            };

            return res.status(200).json({
                meta:{
                    success: true,
                    url: getUrl(req),
                    message: 'Character found successfully'
                },
                data: character
            });

        } catch (error) {
            
            console.log(error);
            return res.status(500).json({
                success : false,
                message : 'Contact the site administrator',
                error
            });

        }
    },
    newCharacter: async (req, res) => {

        const { image, name, age, weight, story, movie_id } = req.body;
               
        try {
            
            const arrayMovies = [];
        
            if (movie_id instanceof Array) {
                movie_id.forEach(id => {
                    arrayMovies.push(id)
                });
            } else {
                arrayMovies.push(movie_id)
            }

            const newCharacter = await Character.create({
                image, 
                name, 
                age, 
                weight, 
                story 
            });

            if (newCharacter) {
                arrayMovies.forEach(movie => {
                    CharacterMovie.create({
                        character_id: newCharacter.id,
                        movie_id: movie
                    })
                })
            }

            return res.status(201).json({
                meta:{
                    success: true,
                    url: getUrl(req),
                    message: 'Character successfully added'
                },
                data: newCharacter
            });

        } catch (error) {
            
            console.log(error);
            return res.status(500).json({
                success : false,
                message : 'Contact the site administrator',
                error
            });
        }

    },
    editCharacter: async (req, res) => {
        
        const { id } = req.params;
        const { image, name, age, weight, story, movie_id } = req.body;

        try {

            const character = await Character.findByPk(id)

            if (!character) {
                return res.status(404).json({
                    success: false,
                    message: 'Character does not exist or wrong id',
                });
            };

            
            await character.update({
                image, 
                name, 
                age,
                weight, 
                story,
                
            }, { where: { id } });
        
            return res.status(200).json({
                success: true,
                url: getUrl(req),
                message: 'Successfully updated character' 
            })

        } catch (error) {
            
            console.log(error);
            return res.status(500).json({
                success : false,
                message : 'Contact the site administrator',
            });
        }
            
    },
    removeCharacter: async (req, res) => {

        const { id } = req.params;

        try {

            await CharacterMovie.destroy({where: { character_id: id }});
            const deleteCharacter = await Character.destroy({where: { id }});             

            if (!deleteCharacter) {
                return res.status(404).json({
                    success: false,
                    message: 'Character does not exist or wrong id',
                });
            }

            return res.status(200).json({
                success: true,
                url: getUrl(req),
                message: 'Movie/serie has been deleted successfully',
            });
            
        } catch (error) {
            
            console.log(error);
            return res.status(500).json({
                success : false,
                message : 'Contact the site administrator',
                error
            });

        }

    },
    searchCharacters: async (req, res) => {

        const { name, age, weight, order = "DESC" } = req.query;

        if(name) name.toLowerCase().trim();
        if(age) age.toLowerCase().trim();
        if(weight) weight.toLowerCase().trim();
        
        try {
            
            if(name === '' || age === '' || weight === '') {
                return res.status(404).json({
                    success : false,
                    message : 'You must pass a query parameter'
                });
            } 

            const findCharacter = await Character.findAll({
                where: {
                    [Op.or]: [
                        { name: { [Op.like]: `%${name}%` } },
                        { age: { [Op.like]: `%${age}%` } },
                        { weight: { [Op.like]: `%${weight}%` } }
                    ]
                },
                include: [
                    { association: 'movies', attributes: ["title"] }
                ],
                order: [["name", order]],
            });

            if (findCharacter.length === 0) {
                return res.status(404).json({
                    success : false,
                    message : 'Character not found'
                });
            }
            
            return res.status(200).json({
                meta: {
                    success: true,
                    url: getUrl(req),
                    total_movies: findCharacter.length,
                },
                data: findCharacter
            });

        } catch (error) {
            
            console.log(error);
            return res.status(500).json({
                success : false,
                message : 'Contact the site administrator',
                error
            });

        }

    },
    
}
