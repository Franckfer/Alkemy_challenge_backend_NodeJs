const { Genre, CharacterMovie, Movie } = require('../database/models');
const getUrl = (req) => req.protocol + '://' + req.get('host') + req.originalUrl;

module.exports = {

    getAllGenres: async (req, res) => {
        const genres = await Genre.findAll({
            attributes: ['name']
        });

        if (genres.length === 0) {
            return res.status(404).json({
                success : false,
                message : 'Genres not found'
            });
        }
        
        return res.status(200).json({
            meta: {
                success: true,
                url: getUrl(req),
                total_genres: genres.length,
            },
            data: genres
        })
    },
    genreDetail: async (req, res) => {

        const { id } = req.params;
                    
        try {

            const genre = await Genre.findByPk(id, {
                include: [
                    { association: 'movies', attributes: ["title"] },
                ]
            });

            
            if (!genre || genre === null) {
                return res.status(404).json({
                    success: false,
                    message: 'Genre not exist or wrong id',
                });
            };

            return res.status(200).json({
                meta:{
                    success: true,
                    url: getUrl(req),
                    message: 'Genre found successfully'
                },
                data: genre
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
    newGenre: async (req, res) => {
        
        const { name, image} = req.body;

        try {
            
            const newGenre = await Genre.create({
                name,
                image
            });

            return res.status(201).json({
                meta:{
                    success: true,
                    url: getUrl(req),
                    message: 'Successfully added genre'
                },
                data: newGenre
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
    editGenre: async (req, res) => {

        const { id } = req.params;
        const { name, image } = req.body;

        try {
            
            const genre = await Genre.findByPk(id)

            if (!genre) {
                return res.status(404).json({
                    success: 'Genre does not exist or wrong id',
                });
            };

            await Genre.update({
                name,
                image
            }, { where: { id } });


            return res.status(200).json({
                success: true,
                url: getUrl(req),
                message: 'successfully updated genre' 
            })
            
        } catch (error) {
            
            console.log(error);
            return res.status(500).json({
                success : false,
                message : 'Contact the site administrator',
            });
        }

    }
    
}
