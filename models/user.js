const mongoose = require('mongoose');
const bycrypt = require('bcrypt');

const saltRounds = 10;
const myPlaintextPassword = 's0//P4$$w0rD';
//const someOtherPlaintextPassword = 'not_bacon';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
    trim: true,
    required: [true, 'name is required'],
  },
  email: {
    type: String,
    maxLength: 50,
    trim: true,
    required: [true, 'email is required'],
    unique: true,
  },
  hash_password: {
    type: String,
    required: [true, 'password is required'],
  },
  role: {
    type: Number,
    default: 0,
  },
  history: {
    type: Array,
    default: [],
  },
});

bycrypt.genSalt(saltRounds, (err, salt) => {
  bycrypt.hash(myPlaintextPassword, salt, (err, hash) => {
    //store hash in your password DB
    try {
      userSchema.virtual('password').set((password) => {
        this._password = password;
        this.hash_password = hash;
      });
    } catch {
      console.log('code does not affected hash');
    }
  });
});

module.exports = mongoose.model('User', userSchema);
