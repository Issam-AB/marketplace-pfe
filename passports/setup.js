const bcrypt = require('bcrypt');
const User = require('../models/user');
const passport = require('passport');
const localStraegy = require('passport-local').Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((user, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

//* Local Strategy */
passport.use(
  new localStraegy({ usernameField: 'email' }, (email, password, done) => {
    //match user
    User.findOne({ email: email })
      .then((user) => {
        //create new user
        if (!user) {
          const newUser = new User({ email, password });
          // Hash paswird before saving in database
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then((user) => {
                  return done(null, user);
                })
                .catch((err) => {
                  return done(null, false, { message: err });
                });
            });
          });
          // return other user
        } else {
          // Match password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'Wrong password' });
            }
          });
        }
      })
      .catch((err) => {
        return done(null, false, { message: err });
      });
  })
);

module.exports = passport;
