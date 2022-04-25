module.exports = (sequelize, DataTypes) => {
    let alias = "CharacterMovie";

    let cols = {
              
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        character_id: {
            type:DataTypes.INTEGER,
            allowNull: false
        },
        movie_id: {
            type:DataTypes.INTEGER,
            allowNull: false
        }

    };

    let config = {
        tableName:"character_movies",
        timestamps:false
    };

    const CharacterMovie = sequelize.define(alias, cols, config);

    CharacterMovie.associate = function(models){

        CharacterMovie.belongsTo(models.Character,{
            as:"characters",
            foreignKey:"character_id",
            otherKey:"movie_id",
            timestamps: false

        });

        CharacterMovie.belongsTo(models.Movie,{
            as:"movies",
            foreignKey:"movie_id",
            otherKey:"character_id",
            timestamps: false
        });

    }   

    return CharacterMovie;

}