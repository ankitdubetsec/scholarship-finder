const express = require("express");
// const Students = require('../models/StudentsData');
const Scholorship = require("../models/Scholorship");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchStudent = require("../middleware/fetchStudent");
const { toast } = require("react-toastify");
// const Scholorship = require('../models/Scholorship');

const router = express.Router();

// ROUTE 1: Create a new scholorship: POST "/api/auth/createscholorship". login required.
router.post(
  "/createscholorship",
  [
    // Validations Using express-validator.
    // body('name', 'Enter a valid Name').isLength({ min: 2 }),
    // body('email', 'Enter a valid Email').isEmail(),
    // body('mobile', 'Enter a valid 10 digit Contact No').isLength({ min: 10 }),
    // body('password', 'Enter a 8 character password').isLength({ min: 8 }),
  ],
  async (req, res) => {
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
        description: req.body.description,
        eligibilityCriteria: req.body.eligibilityCriteria,
        benefits: req.body.benefits,
        provider: req.body.provider,
      });

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
  }
);

// ROUTE 2: fetch all scholorships: POST "/api/auth/fetchscholarship". login required.
router.post(
  "/fetchscholorship",
  [
    // Validations Using express-validator.
    // body('name', 'Enter a valid Name').isLength({ min: 2 }),
    // body('email', 'Enter a valid Email').isEmail(),
    // body('mobile', 'Enter a valid 10 digit Contact No').isLength({ min: 10 }),
    // body('password', 'Enter a 8 character password').isLength({ min: 8 }),
  ],
  async (req, res) => {
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
      scholorship = await Scholorship.find();

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
  }
);

router.delete(
  "/deletescholorship/:id",
  [
    // Validations Using express-validator.
    // body('name', 'Enter a valid Name').isLength({ min: 2 }),
    // body('email', 'Enter a valid Email').isEmail(),
    // body('mobile', 'Enter a valid 10 digit Contact No').isLength({ min: 10 }),
    // body('password', 'Enter a 8 character password').isLength({ min: 8 }),
  ],
  async (req, res) => {
    // If there are errors, return the bad request and the errors.
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     toast.error('Enter correct credentials');
    //     return res.status(400).json({ errors: errors.array() });
    // }
    try {
      const { id: schid } = req.params;
      const sch = await Scholorship.findOneAndDelete({ _id: schid }, req.body);
      if (!sch) {
        return res.status(404).json({ msg: `no scholarship with id ${schid}` });
      }
      res.status(200).json({ sch });
    } catch (error) {
      res.status(500).json({ mssg: error });
    }
  }
);

router.get("/filter", [], async (req, res) => {
  try {
    const { name, location, degree, amountRange, sortByDeadline } = req.query;
    let query = {};
    if (name) {
      query.title = { $regex: name, $options: "i" };
    }
    if (location) {
      query.location = { $regex: location, $options: "i" };
    }
    if (degree) {
      query.degrees = { $regex: degree, $options: "i" };
    }
    if (amountRange) {
      const minAmount = Number(amountRange[0]);
      const maxAmount = Number(amountRange[1]);

      // Assuming the primary amount is the first numeric value in the `funds` string
      query.funds = { $regex: new RegExp(`\\£([0-9,]+)`, "i") };
    }
    let scholarships;

    if (sortByDeadline === "true") {
      scholarships = await Scholorship.find(query).sort({ date: 1 });

      // Filter out scholarships with expired deadlines
      const currentDate = new Date();
      scholarships = scholarships.filter((scholarship) => {
        const deadlineDate = new Date(scholarship.date);
        return deadlineDate >= currentDate;
      });

      // Sort by upcoming deadlines (ascending order)
      scholarships.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB;
      });
    } else {
      scholarships = await Scholorship.find(query);
    }

    res.json(scholarships);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some Error Occured!!!");
  }
});

module.exports = router;
