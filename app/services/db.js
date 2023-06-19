const mongoose = require('mongoose');
const { DB_CONNECTION_STRING } = require('../../configs/env.config.js');
async function DBConnect() {
	try {
		await mongoose.connect(DB_CONNECTION_STRING);
		console.log('Connect database successfully');
	} catch (error) {
		console.log(error);
	}
}
module.exports = { DBConnect };
