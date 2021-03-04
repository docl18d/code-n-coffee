const Fido = require('./Fido');
const User = require('./User');


User.hasMany(Fido, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Fido.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { Fido, User, };