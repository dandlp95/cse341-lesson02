const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
      type: String,
      required: true,
  },
  favColor: {
      type: String,
      required: true,
  },
  birthDay: {
      type: String,
      required: true,
  }
});

const User = mongoose.model("Contact", UserSchema);

module.exports = User;