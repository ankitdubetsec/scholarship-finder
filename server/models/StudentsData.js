const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentDataSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    college_name: {
        type: String,
        required: true
    },
    uid: {
        type: String,
        required: true
    },
    cgpa: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('student', StudentDataSchema);