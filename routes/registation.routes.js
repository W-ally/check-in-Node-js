const express = require('express');

// Controllers
const {
	getRegister,
	createRegister,
	getRegisterById,
	updateRegister,
	deleteRegister,
} = require('../controllers/registation.controller');

const registerRouter = express.Router();

registerRouter.get('/', getRegister);

registerRouter.post('/', createRegister);

registerRouter.get('/:id', getRegisterById);

registerRouter.patch('/:id', updateRegister);

registerRouter.delete('/:id', deleteRegister);

module.exports = { registerRouter };
