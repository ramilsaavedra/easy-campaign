import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
// @ts-ignore
import keys from '../../config/keys';

passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      console.log('profile', profile);
    }
  )
);
