const express = require('express');
const connectDB= require('./DB/connection');

const app = express();

const Port =process.env.Port|| 3000;

connectDB();
app.use(express.json({extended:false}));

app.use('/api/userModel',require('./API/User'));

app.listen(Port,()=>{
    console.log('Sever started');
})