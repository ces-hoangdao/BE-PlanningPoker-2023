const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
	name: String,
	type: {
		type: String,
		enum: ['guest', 'email', 'google'],
		default: 'guest',
	},
	photoURL: String,
	email: String,
});
module.exports = mongoose.model('User', userSchema);
