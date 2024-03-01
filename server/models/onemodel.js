const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    schname: {
        type: String,
        required: [true, 'Please provide the school name']
    },
    name: {
        type: String,
        required: [true, 'Please provide the name']
    },
    mobile: {
        type: String,
        required: [true, 'Please provide the mobile number']
    },
    date_of_birth: {
        type: Date,
        required: [true, 'Please provide the date of birth']
    },
    address: {
        type: String,
        required: [true, 'Please provide the address']
    },
    country: {
        type: String,
        required: [true, 'Please provide the country']
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: [true, 'Please provide the gender']
    },
    college_name: {
        type: String,
        required: [true, 'Please provide the college name']
    },
    uid: {
        type: String,
        required: [true, 'Please provide the UID']
    },
    cgpa: {
        type: Number,
        required: [true, 'Please provide the CGPA']
    },
    degree: {
        type: String,
        required: [true, 'Please provide the degree']
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;