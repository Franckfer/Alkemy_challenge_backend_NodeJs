module.exports = (sequelize, DataTypes) => {

    const alias = "Genre";
  
    const cols = {

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
      
    };
  
    const config = {
        tableName: "genres",
        timestamps: false,
    };
  
    const Genre = sequelize.define(alias, cols, config);

    Genre.associate = models => {

        Genre.hasMany(models.Movie, {
            as: 'movies',
            foreignKey: 'genre_id'
        })
        
    }
  
    return Genre;
  
};