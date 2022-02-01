const { Schema, model } = require('mongoose');
const friendSchema = require('./Friend');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
    },
    thoughtdata: {
      type: String,
      required: true,
      max_length: 50,
    },
    friends: [friendSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
