const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fidoSchema = new Schema({
  Name: {type: String, required: true},
  Breed: {type: String, required: true},
  Sex: {type: String, required: true},
  Age: {type: String, required: true},
  City: {type: String, required: true},
  Park: {type: String, required: true},
  Owners_Preferred_Drink: {type: String, required: true}
});

const Fido = mongoose.model("Fido", fidoSchema);

module.exports = Fido;
