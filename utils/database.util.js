const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
	dialect: 'postgres',
	host: 'localhost',
	username: 'postgres',
	password: 'watu123',
	port: 5432,
	database: 'register',
	
});

module.exports = { db, DataTypes };
