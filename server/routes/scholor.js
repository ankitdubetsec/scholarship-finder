const express = require('express');
// const Students = require('../models/StudentsData');
const Scholorship = require('../models/Scholorship');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchStudent = require('../middleware/fetchStudent');
const { toast } = require('react-toastify');
// const Scholorship = require('../models/Scholorship');

const router = express.Router();


// ROUTE 1: Create a new scholorship: POST "/api/auth/createscholorship". login required.
router.post('/createscholorship'
, [
    // Validations Using express-validator.
    // body('name', 'Enter a valid Name').isLength({ min: 2 }),
    // body('email', 'Enter a valid Email').isEmail(),
    // body('mobile', 'Enter a valid 10 digit Contact No').isLength({ min: 10 }),
    // body('password', 'Enter a 8 character password').isLength({ min: 8 }),
], async (req, res) => {
    // If there are errors, return the bad request and the errors.
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     toast.error('Enter correct credentials');
    //     return res.status(400).json({ errors: errors.array() });
    // }
    try {
        // Check whether user with this Email already exists.
        // let scholarship = await Scholorship.findOne({ email: req.body.email });
        // if (student) {
        //     // toast.error('Email Already registered');
        //     return res.status(400).json({ error: "User with this Email already exist" })
        // }

        // Hashing Password.
        // const salt = await bcrypt.genSalt();
        // securePassword = await bcrypt.hash(req.body.password, salt);
        // Adding user to the Database.
        scholorship = await Scholorship.create({
            title: req.body.title,
            degrees: req.body.degrees,
            funds: req.body.funds,
            date: req.body.date,
            location: req.body.location,
        })

        // const data = {
        //     scholorship: {
        //         id: student.id
        //     }
        // }
        // const authToken = jwt.sign(data, process.env.JWT_SECRET);
       // console.log(scholorship);
        res.json({ scholorship });
    } catch (error) {
        console.log(error.message);
        // toast.error('Internal Server Error');
        res.status(500).send("Some Error Occured!!!");
    }
})

// ROUTE 2: fetch all scholorships: POST "/api/auth/fetchscholarship". login required.
router.post('/fetchscholorship'
, [
    // Validations Using express-validator.
    // body('name', 'Enter a valid Name').isLength({ min: 2 }),
    // body('email', 'Enter a valid Email').isEmail(),
    // body('mobile', 'Enter a valid 10 digit Contact No').isLength({ min: 10 }),
    // body('password', 'Enter a 8 character password').isLength({ min: 8 }),
], async (req, res) => {
    // If there are errors, return the bad request and the errors.
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     toast.error('Enter correct credentials');
    //     return res.status(400).json({ errors: errors.array() });
    // }
    try {
        // Check whether user with this Email already exists.
        // let scholarship = await Scholorship.findOne({ email: req.body.email });
        // if (student) {
        //     // toast.error('Email Already registered');
        //     return res.status(400).json({ error: "User with this Email already exist" })
        // }

        // Hashing Password.
        // const salt = await bcrypt.genSalt();
        // securePassword = await bcrypt.hash(req.body.password, salt);
        // Adding user to the Database.
        scholorship = await Scholorship.find()

        // const data = {
        //     scholorship: {
        //         id: student.id
        //     }
        // }
        // const authToken = jwt.sign(data, process.env.JWT_SECRET);
        //console.log(scholorship);
        res.json({ scholorship });
    } catch (error) {
        console.log(error.message);
        // toast.error('Internal Server Error');
        res.status(500).send("Some Error Occured!!!");
    }
})

module.exports = router;