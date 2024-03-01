const mongoose = require('mongoose');
const { Schema } = mongoose;

const ApplySchema = new Schema({
    studentname: {
        type: String,
        required: true
    },
    studentemail: {
        type: String,
        required: true,
        unique: true
    },
    studentpassword: {
        type: String,
        required: true
    },
    studentmobile: {
        type: String,
        required: true
    },
    studentdate_of_birth: {
        type: String,
        required: true
    },
    studentaddress: {
        type: String,
        required: true
    },
    studentcountry: {
        type: String,
        required: true
    },
    studentgender: {
        type: String,
        required: true
    },
    studentcollege_name: {
        type: String,
        required: true
    },
    studentuid: {
        type: String,
        required: true
    },
    studentcgpa: {
        type: String,
        required: true
    },
    studentdegree: {
        type: String,
        required: true
    },
    organisationtitle: {
        type: String,
        required: true
    },
    organisationdegrees: {
        type: String,
        required: true
    },
    organisationfunds: {
        type: String,
        required: true
    },
    organisationdate: {
        type: String,
        required: true
    },
    organisationlocation: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('apply', ApplySchema);