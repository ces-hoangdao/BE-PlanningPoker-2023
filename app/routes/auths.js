import express from 'express';
import session from 'express-session';
import { body } from 'express-validator';
import { authController } from '../controllers/auth.js';
const router = express.Router();

router.use(
  session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

router.post(
  '/email/signup',
  body('email').trim().isEmail(),
  body('password').isLength({ min: 6 }),
  authController.signUpWithEmailAndPassword
);

router.post('/email/login', authController.loginWithEmailAndPassword);

export default router;
