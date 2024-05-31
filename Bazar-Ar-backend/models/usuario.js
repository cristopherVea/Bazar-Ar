'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    
    nombre:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    correoElectronico: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false

    },
    boletin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: false
    }
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};