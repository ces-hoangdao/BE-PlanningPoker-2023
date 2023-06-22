import express from 'express';
import session from 'express-session';
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

router.post('/email/login', authController.loginWithEmailAndPassword);

export default router;
