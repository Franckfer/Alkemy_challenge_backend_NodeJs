module.exports = (sequelize, DataTypes) => {

    const alias = "Movie";
  
    const cols = {

        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        creation_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        genre_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    };
  
    const config = {
        tableName: "movies",
        timestamps: false,
    };
  
    const Movie = sequelize.define(alias, cols, config);

    Movie.associate = models => {

        Movie.belongsTo(models.Genre, { 
            as: "genres",
            foreignKey: "genre_id"
        });

        Movie.belongsToMany(models.Character, { 
            as: "characters",
            through: 'character_movies',
            foreignKey: 'movie_id',
            otherKey:"character_id",
            timestamps: false
        });

    }
  
    return Movie;
  
};