const mongoose = require('mongoose');
const passport = require('passport');
const {Schema} = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    username: {
      type: String,
    },
    password: {
      type: String,
    }
  });
  
  userSchema.plugin(passportLocalMongoose);
  
  const User = mongoose.model('User', userSchema);
  
  passport.use(User.createStrategy());
  
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
  
  module.exports = User;