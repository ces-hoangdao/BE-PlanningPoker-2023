import { User } from '../models/index.js';
import { CLIENT_URL } from '../../config.js';
import HTTP_STATUS from '../../constants/HTTPStatusCode.js';
import { USER_TYPES } from '../../constants/db.constants.js';

export default {
    // GET /auth/google/failure
    googleAuthFailed: (req, res) => {
        res.status(HTTP_STATUS.BAD_REQUEST.BAD).json({
            success: false,
        });
    },
    // GET /auth/login/success
    googleloginSuccess: (req, res) => {
        if (req.user) {
            return res.status(HTTP_STATUS.GOOD_REQUEST.OK).json({
                success: true,
                data: req.user,
            });
        }
        return res.status(HTTP_STATUS.BAD_REQUEST.BAD).json({
            success: false,
        });
    },
    // REQUEST /auth/logout
    googleLogout: (req, res) => {
        try {
            req.logout((err) => {
                if (err) throw err;
            });
            res.redirect(CLIENT_URL);
        } catch (err) {
            res.status(HTTP_STATUS.BAD_REQUEST.BAD).json({
                success: false,
            });
        }
    },
    // POST /auth/guest/login
    guestLogin: async (req, res) => {
        let { username } = req.body;

        if (!username) {
            return res.status(HTTP_STATUS.BAD_REQUEST.BAD).json({
                success: false,
            });
        }

        try {
            let user = new User({
                name: username,
                type: USER_TYPES.GUEST,
            });
            await user.save();
            return res.status(HTTP_STATUS.GOOD_REQUEST.OK).json({
                success: true,
                data: {
                    _id: user._id,
                    name: user.name,
                    type: USER_TYPES.GUEST,
                },
            });
        } catch (err) {
            return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: 'Internal Server Error',
                data: err,
            });
        }
    },
};
