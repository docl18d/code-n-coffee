const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fidoSchema = new Schema({
  id: {type: String, primaryKey: true, autoIncrement: true},
  Name: {type: String, allowNull: false},
  Breed: {type: String, allowNull: false},
  Sex: {type: String, allowNull: false},
  Age: {type: String, allowNull: false},
  City: {type: String, allowNull: false},
  Park: {type: String, allowNull: false},
  Owners_Preffered_Drink: {type: String, allowNull: false}
});

const Fido = mongoose.model("Fido", fidoSchema);

module.exports = Fido;
