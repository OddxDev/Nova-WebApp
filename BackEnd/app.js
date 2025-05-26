const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors');
const express=require('express');
const app=express();
const connectToDB=require('./DB/db');


connectToDB();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

module.exports = app;