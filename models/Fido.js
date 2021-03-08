const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fidoSchema = new Schema({
  Name: {type: String, allowNull: false},
  Breed: {type: String, allowNull: false},
  Sex: {type: String, allowNull: false},
  Age: {type: String, allowNull: false},
  City: {type: String, allowNull: false},
  Park: {type: String, allowNull: false},
  Owners_Preferred_Drink: {type: String, allowNull: false}
});

const Fido = mongoose.model("Fido", fidoSchema);

module.exports = Fido;
