import bcrypt from 'bcrypt';
const SALT_ROUNDS = 10;

export const authService = {
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
