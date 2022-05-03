const { Movie, CharacterMovie } = require('../database/models');
const { Op } = require('sequelize');
const getUrl = (req) => req.protocol + '://' + req.get('host') + req.originalUrl;



module.exports = {

    getAllMovies: async (req, res) => {

        const movies = await Movie.findAll({
            attributes: ['image', 'title', 'creation_date']
        });


        if (movies.length === 0) {
            return res.status(404).json({
                success : false,
                message : 'Movies or series not found'
            });
        }
        
        return res.status(200).json({
            meta: {
                success: true,
                url: getUrl(req),
                total_movies: movies.length,
            },
            data: movies
        })
        
    },
    getMovie: async (req, res) => {
        
        const { id } = req.params;
                    
        try {

            const movie = await Movie.findByPk(id, {
                include: [
                    { association: 'characters', attributes: ["name"] }, 
                    { association: 'genres', attributes: ["name"] }
                ]
            });

            if (!movie) {
                return res.status(404).json({
                    success: false,
                    message: 'Movie/serie does not exist or wrong id',
                });
            };

            return res.status(200).json({
                meta:{
                    success: true,
                    url: getUrl(req),
                    message: 'Successfully found movie or series'
                },
                data: movie
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
    newMovie: async (req, res) => {
        
        const { image, title, rating, genre_id } = req.body;

        try {
            
            const newMovie = await Movie.create({
                image,
                title,
                creation_date: new Date(),
                rating,
                genre_id
            });

            //console.log(newMovie);
            return res.status(201).json({
                meta:{
                    success: true,
                    url: getUrl(req),
                    message: 'Successfully added movie or series'
                },
                data: newMovie
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
    editMovie: async (req, res) => {

        const { id } = req.params;
        const { image, title, creation_date, rating, genre_id } = req.body;

        try {
            
            const movie = await Movie.findByPk(id)

            if (!movie) {
                return res.status(404).json({
                    success: false,
                    message: 'Movie/serie does not exist or wrong id',
                });
            };

            await Movie.update({
                image, 
                title, 
                creation_date,
                rating, 
                genre_id,
            }, { where: { id } });


            return res.status(200).json({
                success: true,
                url: getUrl(req),
                message: 'successfully updated movie/serie' 
            })
            
        } catch (error) {
            
            console.log(error);
            return res.status(500).json({
                success : false,
                message : 'Contact the site administrator',
            });
        }

    },
    removeMovie: async (req, res) => {

        const { id } = req.params;

        try {

            await CharacterMovie.destroy({where: { movie_id: id }});
            const deletedMovie = await Movie.destroy({where: { id }});

            if (!deletedMovie) {
                return res.status(404).json({
                    success: false,
                    message: 'Movie/serie does not exist or wrong id',
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
    searchMovies: async (req, res) => {

        const { title, genre, order = "DESC" } = req.query;

        if(title) title.toLowerCase().trim();
        if(genre) genre.trim();
        
        try {
            
            if(title === '' || genre === '') {
                return res.status(404).json({
                    success : false,
                    message : 'You must pass a title or genre as a query parameter'
                });
            } 

            const findMovie = await Movie.findAll({
                where: {
                    [Op.or]: [
                        { title: { [Op.like]: `%${title}%` } },
                        { genre_id: { [Op.like]: `%${genre}%` } }
                    ]
                },
                include: [
                    { association: 'genres', attributes: ["name"] }
                ],
                order: [["creation_date", order]],
            });

            if (findMovie.length === 0) {
                return res.status(404).json({
                    success : false,
                    message : 'Movies/series or genre not found'
                });
            }
            
            return res.status(200).json({
                meta: {
                    success: true,
                    url: getUrl(req),
                    total_movies: findMovie.length,
                },
                data: findMovie
            });

        } catch (error) {
            
            console.log(error);
            return res.status(500).json({
                success : false,
                message : 'Contact the site administrator',
                error
            });

        }       
        
    }
    
}
