const exprees = require('express');
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

const passport = require('passport');
const auth = require('./routes/auth');

require('dotenv').config();
const app = exprees();

app.use(exprees.json());
app.use(exprees.urlencoded());

//* connect mongoodb */

mongoose
  .connect(process.env.DATABASE, { useNewUrlParser: true })
  .then(console.log(`db connected as ${process.env.DATABASE}`))
  .catch((err) => console.error(err));

/**
 * Session Express
 */
app.use(
  session({
    secret: 'Very secret this is',
    resave: false,
    saveUninitialized: true,
    store: new mongoStore({ mongoseConnection: mongoose.connection }),
  })
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Route
app.use('apu/auth', auth);
app.get('/', (req, res) => res.send('good morning Issam'));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`app is running on port ${port}`));
