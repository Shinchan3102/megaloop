const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async (req, res) => {
    try {
        const post = await Post.find().sort({ _id: -1 });
        res.status(200).json(post);
    }
    catch (err) {
        res.status(400).json(err);
    }
});

router.post('/post', async (req, res) => {
    try {
        console.log(req.body);
        const newPost = new Post(req.body);
        await newPost.save();
        console.log(newPost);
        res.status(201).json(newPost);
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
})

router.patch('/post/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        console.log(_id);
        console.log(req.body);
        const post = req.body;
        const updatedPost = await Post.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ message: "No any post is available" });
        }
        res.json(updatedPost);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});
router.patch('/category', async (req, res) => {
    try {
        console.log(req.body);
        const updatedPosts=await Post.updateMany({category:req.body.presentCategory},{$set:{category: req.body.updatedCategory}});
        console.log(updatedPosts);
        res.status(200).json(updatedPosts);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.delete('/post/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const deletePost = await Post.findByIdAndDelete(_id);
        console.log(deletePost);
        if (!deletePost) {
            return res.status(404).json({ data: "no any post is available to delete" });
        }
        res.json(deletePost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/category/:category', async (req, res) => {
    try {
        const { category } = req.params;
        console.log(category);
        const deletePosts = await Post.deleteMany({ category });
        console.log(deletePosts);
        res.status(201).json(deletePosts);
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;