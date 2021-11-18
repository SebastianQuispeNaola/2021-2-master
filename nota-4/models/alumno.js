'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alumno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Alumno.hasMany(models.Nota, {
        foreignKey: 'alumnoId', 
        as : 'notitas'
       });      
    }
  };
  Alumno.init({
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey : true
    } ,
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Alumno',
  });
  return Alumno;
};