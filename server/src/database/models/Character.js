module.exports = (sequelize, DataTypes) => {

    const alias = "Character";
  
    const cols = {
      
    };
  
    const config = {
      tableName: "characters",
      timestamps: false,
    };
  
    const Character = sequelize.define(alias, cols, config);
  
    return Character;
  
};