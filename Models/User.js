const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    name: { 
        type: string,
        required: true
    },
    email: {
        type: string,
        required: true,
        unique: true
    },
    password: {
        type: string,
        required: true
    },
    avatar: {
        type : string,
    },
    date: {
        type: date,
        default: date.now()
    }
});
module.exports = user = mongoose.model('user');