require('dotenv').config()

const express = require('express');
const app= express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose= require('mongoose');
mongoose.connect(
    process.env.DBURL,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (req,res)=>{
        console.log('Connected to the database');
})


app.use('/posts',require('./routes/posts'));

port=process.env.PORT;
app.listen(port,()=>{
    console.log('Listening to',port);
})