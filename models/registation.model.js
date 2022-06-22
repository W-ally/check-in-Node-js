const { db, DataTypes } = require('../utils/database.util');

// Create our first model (table)
const Registation = db.define('registation', {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
	},
	entranceTime: {
		type: DataTypes.DATE,
		allowNull: false,
		
	},
	exitTime: {
		type: DataTypes.DATE,
		allowNull: false,
	
		

	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'working',
	},
});

module.exports = { Registation };
