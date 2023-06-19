import passport from 'passport';
import GoogleOAuth2 from 'passport-google-oauth2';
import { User } from '../models/index.js';
import { CLIENT_ID, CLIENT_SECRET, SERVER_URL } from '../../config.js';
import { USER_TYPES } from '../../constants/db.constants.js';

const GoogleStrategy = GoogleOAuth2.Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            callbackURL: `${SERVER_URL}/auth/google/callback`,
            passReqToCallback: true,
        },
        async (request, accessToken, refreshToken, profile, done) => {
            let data = profile._json;
            let user = await User.findOne({
                email: data.email,
            });
            if (!user) {
                user = new User({
                    name: data.name,
                    type: USER_TYPES.GOOGLE,
                    email: data.email,
                    photoUrl: data.picture,
                });
                await user.save();
            }
            done(null, user);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
