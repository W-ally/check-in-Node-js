const express = require('express');

// Routers
const { registerRouter } = require('./routes/registation.routes');


// Utils
const { db } = require('./utils/database.util');

// Init express app
const app = express();

app.use(express.json());

// Define endpoints
app.use('/api/v1/registration', registerRouter);

db.authenticate()
	.then(() => console.log('Db authenticated'))
	.catch(err => console.log(err));

db.sync()
	.then(() => console.log('Db synced'))
	.catch(err => console.log(err));

app.listen(5000, () => {
	console.log('App running!!');
});
