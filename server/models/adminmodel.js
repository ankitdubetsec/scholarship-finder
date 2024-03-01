const mongoose = require('mongoose')
// const Student = require('./StudentsData');
const noteschema = new mongoose.Schema(
    {
        schname: {
            type: String,
            required: [true, 'must provide name'],
            // maxlength:5,
        }
        ,
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student' // Reference to the Student model
        }
        ,
        name: {
            type: String,
            // required: true
        },
        mobile: {
            type: String,
            // required: true
        },
        date_of_birth: {
            type: String,
            // required: true
        },
        address: {
            type: String,
            // required: true
        },
        country: {
            type: String,
            // required: true
        },
        gender: {
            type: String,
            // required: true
        },
        college_name: {
            type: String,
            // required: true
        },
        uid: {
            type: String,
            // required: true
        },
        cgpa: {
            type: String,
            // required: true
        },
        degree: {
            type: String,
            // required: true
        },
        status:{
            type:String
        }

    }
)

const Note = mongoose.model('note', noteschema)
module.exports = Note