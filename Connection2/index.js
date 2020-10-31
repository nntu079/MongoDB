const express = require('express');
const app = express();

const mongoose= require('mongoose');

require('dotenv').config()

const customMiddleware = (req,res,next)=>{
    console.log('Welcome to my middleware');

    next();
}

User = require('./model/user');

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('First request !!!');
})

app.get('/users',(req,res)=>{
    let users = ["Tu","Phuong"];

    res.send({
        users: users
    });
})

app.post('/createUser', async (req,res)=>{
    try{
        const myuser=new User(req.body);
        await myuser.save();

        res.send(myuser);
    }
    catch(err)
    {
        res.send("Message: ",err)
    }
})

mongoose.connect(
    process.env.DBURL,
    { useUnifiedTopology: true,
        useNewUrlParser: true },
    (req,res)=>{
        console.log('Connected to the database');
})


port=process.env.PORT;
app.listen(port,()=>{
    console.log('Listening to',port);
})