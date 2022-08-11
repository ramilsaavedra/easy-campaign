import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import mongoose from 'mongoose';
// @ts-ignore
import keys from '../../config/keys';

const User = mongoose.model('users');

type User = {
  id?: number | undefined;
};

passport.serializeUser((user: User, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({
        providerId: profile.id,
      }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({
            providerId: profile.id,
            provider: profile.provider,
          })
            .save()
            .then((user) => {
              done(null, user);
            });
        }
      });
    }
  )
);
