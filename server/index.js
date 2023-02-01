const express = require("express");
const { default: mongoose, get } = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 4000;
app.use(express.json());
mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/Exam").then(console.log("hi"));

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

app.post("/posts", async (req, res) => {
    try {
        const newPost = await Post.insertMany(req.body);
        console.log(req.body);
        res.send(newPost);
    } catch (err) {
        console.log("not working");
        res.send(err.message);
    }
});

app.get("/posts/:id", async (req, res) => {
    const posts = await Post.find({ userId: req.params.id });
    res.send(posts);
});

app.listen(port);
