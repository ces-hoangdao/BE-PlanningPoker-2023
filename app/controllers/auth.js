import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import { User } from '../models/index.js';
const saltRounds = 10;

const emailSignUp = async function (req, res) {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		const { email, password, username } = req.body;
		bcrypt.hash(password, saltRounds).then(async (hash) => {
			const user = new User({
				email,
				password: hash,
				name: username,
				type: 'email',
			});
			await user.save();
			let sendUser = { ...user._doc };
			delete sendUser.password;
			res.status(200).json({
				success: true,
				cookie: user._id,
				data: sendUser,
			});
		});
	} else {
		res.status(500).json({
			success: false,
			message: 'Internal server error',
			data: errors,
		});
	}
};

export default { emailSignUp };
