const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fidoSchema = new Schema({
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  Name: {type: DataTypes.STRING, allowNull: false},
  Breed: {type: DataTypes.STRING, allowNull: false},
  Sex: {type: DataTypes.STRING, allowNull: false},
  Age: {type: DataTypes.STRING, allowNull: false},
  City: {type: DataTypes.STRING, allowNull: false},
  Park: {type: DataTypes.STRING, allowNull: false},
  Owners_Preffered_Drink: {type: DataTypes.STRING, allowNull: false}
});

const Fido = mongoose.model("Fido", fidoSchema);

module.exports = Fido;
