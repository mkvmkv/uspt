const mongoose = require('mongoose');


const Data = mongoose.Schema;

const UserData = new Data({
    'name':String,
    "last":String,
    "email":String,
    "password":String,
    'age':Number,
});

module.exports = mongoose.model('Data',UserData);