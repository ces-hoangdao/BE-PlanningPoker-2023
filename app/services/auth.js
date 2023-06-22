import bcrypt from 'bcrypt';
import { UserTypes } from '../../constants/db.constants.js';
import { User } from '../models/index.js';
const SALT_ROUNDS = 10;

export const authService = {
  async getUserOfTypeEmail(email) {
    const existingUser = await User.findOne({ email: email }).lean();
    return existingUser;
  },

  async createUser({ email, password, username }) {
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({
      email,
      password: hash,
      name: username,
      type: UserTypes.EMAIL,
    });
    await user.save();
    let sendUser = { ...user._doc };
    delete sendUser.password;
    return sendUser;
  },

  async getLoggedInUserOfTypeEmail({ email, password }) {
    let user = await authService.getUserOfTypeEmail(email);
    if (!user) {
      return null;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return user;
    } else {
      return null;
    }
  },
};
