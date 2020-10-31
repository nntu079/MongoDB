const express = require('express');

const router = express.Router();

const PostDB= require('../models/Posts')

//submit a post
router.post('/',async (req,res)=>{
    const post= new PostDB({
        title:req.body.title,
        description:req.body.description
    })

   try{
       const savePost = await post.save();
       res.json(savePost);
   }catch(e){
       res.json({
           'message':e
       })
   }
})

//get all posts
router.get('/', async (req,res)=>{
    try{
        const posts= await PostDB.find();
        res.json(posts);
    }catch(e){
        res.json({
            'message':e
        })
    }
})

//get a specific post
router.get('/:id', async (req,res)=>{
    try{
        const post= await PostDB.findById(req.params.id)
        res.json(post);
    }catch(e){
        res.json({
            'message':e
        })
    }
})

//delete a specific post
router.delete('/:id', async (req,res)=>{
    try{
        const post= await PostDB.remove({
            _id:req.params.id
        });
        
        res.json(post);
    }catch(e){
        res.json({
            'message':e
        })
    }
})


module.exports=router;