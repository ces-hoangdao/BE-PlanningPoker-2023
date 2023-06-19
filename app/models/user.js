import mongoose from 'mongoose';
import { USER_TYPES } from '../../constants/db.constants.js';
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: String,
	type: {
		type: String,
		enum: [USER_TYPES.GUEST, USER_TYPES.EMAIL, USER_TYPES.GOOGLE],
		default: USER_TYPES.GUEST,
	},
	photoURL: String,
	email: String,
	password: String,
});

export default mongoose.model('User', userSchema);
