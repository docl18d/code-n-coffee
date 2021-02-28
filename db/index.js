'use strict'

const { Sequelize } = require('sequelize');
const pkg = require('../package.json');

module.export = new Sequelize(`postgres://localhost:5432/${pkg.name}`),
{
    logging: false,
};