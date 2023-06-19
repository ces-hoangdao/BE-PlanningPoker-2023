const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const issueSchema = new Schema({
	name: String,
	room: mongoose.Types.ObjectId,
	index: Number,
	storyPoint: {
		type: Number,
		default: null,
	},
});

module.exports = mongoose.model('Issue', issueSchema);
