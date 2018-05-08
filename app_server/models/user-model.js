const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    googleId: String,
    editor: Boolean,
    estilo: Boolean,
    thumbnail: String,
    googleplusurl: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;
