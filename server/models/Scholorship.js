const mongoose = require('mongoose');
const { Schema } = mongoose;

const ScholarshipSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    degrees: {
        type: String,
        required: true
    },
    funds: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('scholarships', ScholarshipSchema);