const mongoose = require('mongoose');
// const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
  github_username: String,
  avatar_url: String,
  techs: [String],
});

module.exports = mongoose.model('Dev', DevSchema);

