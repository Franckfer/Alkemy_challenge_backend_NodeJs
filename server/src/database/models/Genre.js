module.exports = (sequelize, DataTypes) => {

    const alias = "Genre";
  
    const cols = {
      
    };
  
    const config = {
      tableName: "genres",
      timestamps: false,
    };
  
    const Genre = sequelize.define(alias, cols, config);
  
    return Genre;
  
};