import mongoose from 'mongoose';
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

export default mongoose.model('Issue', issueSchema);
