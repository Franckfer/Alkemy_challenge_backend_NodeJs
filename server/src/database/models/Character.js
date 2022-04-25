module.exports = (sequelize, DataTypes) => {

    const alias = "Character";
  
    const cols = {

        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.STRING,
            allowNull: false
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: false
        },
        story: {
            type: DataTypes.TEXT,
            allowNull: false
        }
      
    };
  
    const config = {
        tableName: "characters",
        timestamps: false,
    };
  
    const Character = sequelize.define(alias, cols, config);

    Character.associate = models => {

        Character.belongsToMany(models.Movie, {
            as: "movies",
            through: "character_movies",
            foreignKey: "character_id",
            otherKey: "movie_id",
            timestamps: false
        })
    }
  
    return Character;
  
};