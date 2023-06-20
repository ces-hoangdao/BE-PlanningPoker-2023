import express from 'express';
const router = express.Router();
import passport from 'passport';
import '../services/passport.js';
import session from 'express-session';
import authController from '../controllers/auth.js';
import { CLIENT_URL } from '../../config.js';

router.use(
    session({
        secret: 'mysecret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
        },
    })
);

router.use(passport.initialize());
router.use(passport.session());

router.get(
    '/google',
    passport.authenticate('google', {
        scope: ['email', 'profile'],
    })
);

router.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: `${CLIENT_URL}`,
        failureRedirect: '/auth/google/failure',
    })
);

router.get('/google/failure', authController.googleAuthFailed);

router.get('/login/success', authController.googleloginSuccess);

router.use('/logout', authController.googleLogout);

router.post('/guest/login', authController.guestLogin);


export default router