// Models
const { Registation } = require('../models/registation.model');

const getRegister = async (req, res) => {
	try {
		const register = await Registation.findAll();

		res.status(200).json({
			status: 'working',
			register,
		});
	} catch (err) {
		console.log(err);
	}
};

const createRegister = async (req, res) => {
	try {
		const { entranceTime } = req.body;

		const newRegister = await Registation.create({
			entranceTime});

		res.status(201).json({
			status: 'working',
			newRegister,
		});
	} catch (err) {
		console.log(err);
	}
};

const getRegisterById = async (req, res) => {
	const { id } = req.params;

	const user = await Registation.findOne({ where: { id } });

	if (!user) {
		return res.status(404).json({
			status: 'error',
			message: 'Register not found',
		});
	}

	res.status(200).json({
		status: 'working',
		user,
	});
};

const updateRegister = async (req, res) => {
	const { id } = req.params;
	const { exitTime } = req.body;

	const user = await Registation.findOne({ where: { id } });

	if (!user) {
		return res.status(404).json({
			status: 'error',
			message: 'Register not found',
		});
	}

	await user.update({ exitTime, status:"out" });

	res.status(204).json({ status: 'success' });
};

const deleteRegister = async (req, res) => {
	const { id } = req.params;

	const user = await Registation.findOne({ where: { id } });

	if (!user) {
		return res.status(404).json({
			status: 'error',
			message: 'Register not found',
		});
	}

	// await user.destroy();
	await user.update({ status: 'Cancelled' });

	res.status(204).json({ status: 'success' });
};

module.exports = {
	getRegister,
	createRegister,
	getRegisterById,
	updateRegister,
	deleteRegister,
};
