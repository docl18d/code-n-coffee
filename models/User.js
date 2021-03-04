const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    userName: { type: DataTypes.STRING, allowNull: false },
    email: {
        type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true },
        password: { type: DataTypes.STRING, allowNull: false, validate: { len: [8] } }
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;