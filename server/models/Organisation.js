const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrganisationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true
    },
    // profession: {
    //     type: String,
    //     required: true
    // },
    // specialisation: {
    //     type: String,
    //     required: true
    // },
    // age: {
    //     type: Number,
    //     required: true
    // },
    // gender: {
    //     type: String,
    //     required: true
    // },
    // address: {
    //     type: String,
    //     required: true
    // },
    // city: {
    //     type: String,
    //     required: true
    // },
    // password: {
    //     type: String,
    //     required: true
    // },
    // fees: {
    //     type: String,
    //     required: true
    // },
    // timing: {
    //     type: String,
    //     required: true
    // },
    // date: {
    //     type: Date,
    //     default: Date.now
    // }
});

module.exports = mongoose.model('organisations', OrganisationSchema);