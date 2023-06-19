import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const historySchema = new Schema({
	issueName: String,
	room: mongoose.Types.ObjectId,
	results: Number,
	agreements: Number,
	duration: Number,
	date: Date,
	voteOnTotal: String,
	playerResults: String,
});

export default mongoose.model('VotingHistory', historySchema);
