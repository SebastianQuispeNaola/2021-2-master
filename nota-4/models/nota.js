'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Nota.belongsTo(models.Alumno, {
        foreignKey: 'alumnoId', 
        as : 'alumnito'
       });      
    }
  };
  Nota.init({
    tipo: DataTypes.STRING,
    valor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Nota',
  });
  return Nota;
};