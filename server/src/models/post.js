const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, require: true },
  author: { type: String, require: true },
  description: { type: String, require: true },
  likes: { type: Number },
  comments: [{ body: String }],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
