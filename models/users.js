const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String 
    },
    lastName: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
}, {
    collection: 'users'
})

const model = mongoose.model('UserSchema', UserSchema);
module.exports = model;