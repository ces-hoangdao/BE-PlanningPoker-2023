import { validationResult } from 'express-validator';
import { HTTP_STATUS } from '../../constants/HTTPStatusCode.js';
import { RESPONSE_MESSAGE } from '../../constants/message.js';
import { authService } from '../services/auth.js';

export const authController = {
  async signUpWithEmailAndPassword(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(HTTP_STATUS.BAD_REQUEST).json({
        success: false,
        message: RESPONSE_MESSAGE.INTERNAL_SERVER_ERROR,
        data: errors,
      });
    } else {
      const { email, password, username } = req.body;
      const existingUser = await authService.getUserOfTypeEmail(email);
      if (existingUser) {
        return res.status(HTTP_STATUS.NOT_ACCEPTED).json({
          success: false,
          message: RESPONSE_MESSAGE.SIGNUP_EMAIL_EXISTED,
        });
      }
      const sendUser = await authService.createUser({
        email,
        password,
        username,
      });
      res.status(HTTP_STATUS.CREATED).json({
        success: true,
        data: sendUser,
      });
    }
  },

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
