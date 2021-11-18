'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Peso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Peso.init({
    tipo: {
      type: DataTypes.STRING,
      primaryKey : true
    },
    peso: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Peso',
  });
  return Peso;
};