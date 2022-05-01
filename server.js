const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const connection = require('./db/connect');

connection.initDatabase();

app.use('/', require('./routes'));

app.listen(PORT, ()=>{
    console.log(`listening on PORT ${PORT}`);
});


