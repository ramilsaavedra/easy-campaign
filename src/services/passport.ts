import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import mongoose from 'mongoose';

const User = mongoose.model('users');

type User = {
  id?: number | undefined;
};

passport.serializeUser((user: User, done) => {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({
        providerId: profile.id,
      });

      if (existingUser) {
        return done(null, existingUser);
      }

      const newUser = await new User({
        providerId: profile.id,
        provider: profile.provider,
      }).save();

      done(null, newUser);
    }
  )
);
