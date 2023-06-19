const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const votingSchema = new Schema(
	{
		user: {
			type: mongoose.Types.ObjectId,
			ref: 'user',
		},
		vote: String,
		connected: Boolean,
	},
	{
		_id: false,
	}
);
const roomSchema = new Schema({
	name: {
		type: String,
		default: 'Planning poker game',
	},
	fullConsensus: {
		type: Number,
		default: 0,
	},
	votingSystem: {
		type: Array,
		default: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, '?', 'coffee'],
	},
	status: {
		type: String,
		enum: ['ready', 'voting', 'concluded'],
	},
	voting: [votingSchema],
	selectedIssue: mongoose.Types.ObjectId,
});

module.exports = mongoose.model('Room', roomSchema);
