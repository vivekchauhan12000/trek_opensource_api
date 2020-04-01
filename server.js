const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const cors = require('cors');

dotenv.config({path:'./config/config.env'});

//connect to database
connectDB();

const app = express();

app.use(express.json());

app.use(cors());


//Routes
app.use('/api/v1/stores',require('./routers/stores'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>
console.log(`server is running on port${PORT}`)
);