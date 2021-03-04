const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Fido extends Model {}

Fido.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Sex: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    City: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Park: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Owners_Preffered_Drink: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'fido'
  },
);

module.exports = Fido;