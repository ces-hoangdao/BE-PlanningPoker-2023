import mongoose from 'mongoose';
import {
	ROOM_NAME_DEFAULT,
	ROOM_STATUSES,
	VOTING_SYSTEM,
} from '../../constants/db.constants.js';
const Schema = mongoose.Schema;

const votingSchema = new Schema(
	{
		user: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
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
		default: ROOM_NAME_DEFAULT,
	},
	fullConsensus: {
		type: Number,
		default: 0,
	},
	votingSystem: {
		type: Array,
		default: VOTING_SYSTEM.DEFAULT,
	},
	status: {
		type: String,
		enum: [ROOM_STATUSES.READY, ROOM_STATUSES.VOTING, ROOM_STATUSES.CONCLUDED],
		default: ROOM_STATUSES.READY,
	},
	voting: [votingSchema],
	selectedIssue: mongoose.Types.ObjectId,
});

export default mongoose.model('Room', roomSchema);
