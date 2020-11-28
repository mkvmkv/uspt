const express = require('express');
var bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const tributelet = require('./routes/routes')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp', {useUnifiedTopology: true},()=>{
console.log("db connected");
});

app.use('/a1',tributelet);

const port = 3001;
app.listen(port,(err,data)=>{
    console.log('we are hearing on ',port);
    
})