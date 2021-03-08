const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, allowNull: false },
    lastName: { type: String, allowNull: false },
    email: { type: String, allowNull: false, unique: true, validate: { isEmail: true } },
    password: { type: String, allowNull: false, validate: { len: [8] } }
});

const User = mongoose.model("User", userSchema);

module.exports = User;