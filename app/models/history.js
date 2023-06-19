const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const historySchema = new Schema({
	issueName: String,
	roomId: Schema.Types.ObjectId,
	result: Number,
	agreement: Number,
	duration: Number,
	date: Date,
	voteOnTotal: String,
	playerResult: String,
});
module.exports = mongoose.model('VotingHistory', historySchema);
