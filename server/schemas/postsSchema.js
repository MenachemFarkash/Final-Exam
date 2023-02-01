const mongoose = require("mongoose");

const Post = new mongoose.model(
    "Post",
    new mongoose.Schema({
        userId: {
            type: Number,
        },
        id: {
            type: Number,
        },
        title: {
            type: String,
        },
        body: {
            type: String,
        },
    })
);

module.exports = Post;
