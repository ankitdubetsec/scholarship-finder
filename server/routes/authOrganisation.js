const express = require('express');
const Organisation = require('../models/Organisation');
const Students = require('../models/StudentsData');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchOrganisation = require('../middleware/fetchOrganisation');
const { toast } = require('react-toastify');

const router = express.Router();

// ROUTE 1: Create a Professional using: POST "/api/authProfessional/createprofessional". NO login required.
router.post('/createorganisation', [

], async (req, res) => {
    // If there are errors, return the bad request and the errors.
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     toast.error('Enter correct Credentials');
    //     return res.status(400).json({ errors: errors.array() });
    // }
    try {
        // Check whether user with this Email already exists.
        let organisation = await Organisation.findOne({ email: req.body.email });
        if (organisation) {
            toast.error('Email Already Registered');
            return res.status(400).json({ error: "Professional with this Email already exist" })
        }
        
        // Hashing Password.
        // const salt = await bcrypt.genSalt();
        // securePassword = await bcrypt.hash(req.body.password, salt);
        // Adding professional to the Database.
        console.log("hello");
        organisation = await Organisation.create({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile
        })

        const data = {
            organisation: {
                id: organisation.id
            }
        }
        const authToken = jwt.sign(data, process.env.JWT_SECRET);
        console.log(authToken);
        res.json({ authToken });
    } catch (error) {
        console.log(error.message);
        toast.error('Internal Server Error');
        res.status(500).send("Some Error Occured");
    }
})

// ROUTE 2: Authenticate a professional(Login a professional) using : POST "api/authProfessional/loginprofessional". NO login required.
router.post('/loginorganisation', [
    // body('email', 'Enter a value Email').isEmail(),
    // body('password', 'Enter a value Email').exists()
], async (req, res) => {
    // If there are errors, return the bad request and the errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let organisation = await Organisation.findOne({ email });
        if (!organisation) {
            return res.status(400).json({ error: "Email Not Registered" });
        }

        const comparePassword = await bcrypt.compare(password, organisation.password);
        if (!comparePassword) {
            return res.status(400).json({ error: "Incorrect Password" });
        }

        const data = {
            organisation: {
                id: organisation.id
            }
        }
        const authToken = jwt.sign(data, process.env.JWT_SECRET);
        res.json({ authToken });
    } catch (error) {
        console.log(error.message);
        toast.error('Internal Server Error');
        res.status(500).send("Some Error Occured");
    }
})

// ROUTE 3: Get logged in professional's Detail using : POST "api/authProfessional/getprofessional". Login required.
router.post('/getorganisation', fetchOrganisation, async (req, res) => {
    try {
        professionalid = req.professional.id;
        const organisation = await Organisation.findById(organisationid).select("-password");
        res.send(organisation);
    } catch (error) {
        console.log(error.message);
        toast.error('Internal Server Error');
        res.status(500).send("Some Error Occured");
    }
})

// ROUTE 4: Get Users using : POST "api/authProfessional/getUsers". Login required.
router.post('/getUsers', [
    // Validations Using express-validator.
], async (req, res) => {
    // If there are errors, return the bad request and the errors.
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     toast.error('Enter correct Credentials');
    //     return res.status(400).json({ errors: errors.array() });
    // }
    try {
        // Check whether user with this Email already exists.
        let student = await Students.find()
        // if (student) {
        //     toast.error('Email Already Registered');
        //     return res.status(400).json({ error: "Professional with this Email already exist" })
        // }

        // // Hashing Password.
        // const salt = await bcrypt.genSalt();
        // securePassword = await bcrypt.hash(req.body.password, salt);
        // // Adding professional to the Database.
        // organisation = await Organisation.create({
        //     name: req.body.name,
        //     email: req.body.email,
        //     mobile: req.body.mobile,
        //     profession: req.body.profession,
        //     specialisation: req.body.specialisation,
        //     age: req.body.age,
        //     gender: req.body.gender,
        //     address: req.body.address,
        //     city: req.body.city,
        //     password: securePassword,
        //     fees: req.body.fees,
        //     timing: req.body.timing
        // })

        // const data = {
        //     organisation: {
        //         id: organisation.id
        //     }
        // }
        // const authToken = jwt.sign(data, process.env.JWT_SECRET);
        // console.log(authToken);
        res.json({ student });
    } catch (error) {
        console.log(error.message);
        toast.error('Internal Server Error');
        res.status(500).send("Some Error Occured");
    }
})



module.exports = router;