'use strict'

const db = require('../index');
const User = require('./User');
const Fido = require('./Fido');

Fido.belongsTo(Fidos);
  Fidos.hasMany(Fido);

module.exports = { db, User, Fido };