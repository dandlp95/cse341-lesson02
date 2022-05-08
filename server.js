const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// const connection = require('./db/connect');

const dotenv = require('dotenv');
dotenv.config();

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() =>{
        
        app
            .use(express.json())
            .use(cors())
            .use('/', require('./routes'));

        app.listen(PORT, ()=>{
        console.log(`listening on PORT ${PORT}`);
    });
    })





