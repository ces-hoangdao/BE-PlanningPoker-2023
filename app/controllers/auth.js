import { HTTP_STATUS } from '../../constants/HTTPStatusCode.js';
import { RESPONSE_MESSAGE } from '../../constants/message.js';
import { authService } from '../services/auth.js';

export const authController = {
  async loginWithEmailAndPassword(req, res) {
    try {
      const { email, password } = req.body;
      const user = await authService.getLoggedInUserOfTypeEmail({
        email,
        password,
      });
      if (!user) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
          success: false,
          message: RESPONSE_MESSAGE.EMAIL_LOGIN_ERROR,
        });
      }
      delete user.password;
      res.status(HTTP_STATUS.OK).json({
        success: true,
        data: user,
      });
    } catch {
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: RESPONSE_MESSAGE.INTERNAL_SERVER_ERROR,
      });
    }
  },
};
