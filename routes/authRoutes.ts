import { Application } from 'express';
import passport from 'passport';

export default (app: Application) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      if (process.env.NODE_ENV === 'production') {
        res.redirect('/dashboard');
      } else {
        res.redirect('http://localhost:3000/dashboard');
      }
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout((err) => {});
    if (process.env.NODE_ENV === 'production') {
      res.redirect('/');
    } else {
      res.redirect('http://localhost:3000/');
    }
  });

  app.get('/api/current-user', (req, res) => {
    res.send(req.user);
  });
};
