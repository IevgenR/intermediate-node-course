const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/userData')

const UserSchema1 = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
