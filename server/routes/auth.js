const express = require("express");
const Students = require("../models/StudentsData");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchStudent = require("../middleware/fetchStudent");
const Provider = require("../models/provider");
const { toast } = require("react-toastify");

const router = express.Router();

// ROUTE 1: Create a User using: POST "/api/auth/createuser". NO login required.
router.post(
  "/createstudent",
  [
    // Validations Using express-validator.
    body("name", "Enter a valid Name").isLength({ min: 2 }),
    body("email", "Enter a valid Email").isEmail(),
    body("mobile", "Enter a valid 10 digit Contact No").isLength({ min: 10 }),
    body("password", "Enter a 8 character password").isLength({ min: 8 }),
    body("address", "Enter your address").isLength({ min: 1 }),
    // body('date_of_birth', 'Enter your DOB').exists,
    // body('country_name', 'Enter your country').exists,
    // body('uid', 'Enter your UID No.').exists,
    // body('cgpa', 'Enter your CGPA').exists,
    // body('degree', 'Enter your Degree').exists,
  ],
  async (req, res) => {
    // If there are errors, return the bad request and the errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      toast.error("Enter correct credentials");
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // Check whether user with this Email already exists.
      let student = await Students.findOne({ email: req.body.email });
      if (student) {
        // toast.error('Email Already registered');
        return res
          .status(400)
          .json({ error: "User with this Email already exist" });
      }

      // Hashing Password.
      const salt = await bcrypt.genSalt();
      securePassword = await bcrypt.hash(req.body.password, salt);
      // Adding user to the Database.
      student = await Students.create({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: securePassword,
        address: req.body.address,
        date_of_birth: req.body.date_of_birth,
        country: req.body.country,
        gender: req.body.gender,
        college_name: req.body.college_name,
        uid: req.body.uid,
        cgpa: req.body.cgpa,
        degree: req.body.degree,
      });

      const data = {
        student: {
          id: student.id,
        },
      };
      const authToken = jwt.sign(data, process.env.JWT_SECRET);
      console.log(authToken);
      res.json({ authToken });
    } catch (error) {
      console.log(error.message);
      // toast.error('Internal Server Error');
      res.status(500).send("Some Error Occured!!!");
    }
  }
);

router.post(
  "/createprovider",
  [
    // Validations Using express-validator.
    body("name", "Enter a valid Name").isLength({ min: 2 }),
    body("email", "Enter a valid Email").isEmail(),
    body("contact", "Enter a valid 10 digit Contact No").isLength({ min: 10 }),
    body("password", "Enter a 8 character password").isLength({ min: 8 }),
    // body('date_of_birth', 'Enter your DOB').exists,
    // body('country_name', 'Enter your country').exists,
    // body('uid', 'Enter your UID No.').exists,
    // body('cgpa', 'Enter your CGPA').exists,
    // body('degree', 'Enter your Degree').exists,
  ],
  async (req, res) => {
    // If there are errors, return the bad request and the errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      toast.error("Enter correct credentials");
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // Check whether user with this Email already exists.
      let prov = await Provider.findOne({ email: req.body.email });
      if (prov) {
        // toast.error('Email Already registered');
        return res
          .status(400)
          .json({ error: "User with this Email already exist" });
      }

      // Hashing Password.
      const salt = await bcrypt.genSalt();
      securePassword = await bcrypt.hash(req.body.password, salt);
      // Adding user to the Database.
      prov = await Provider.create({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        password: securePassword,
      });

      const data = {
        provider: {
          id: prov.id,
        },
      };
      const authToken = jwt.sign(data, process.env.JWT_SECRET);
      console.log(authToken);
      res.json({ authToken });
    } catch (error) {
      console.log(error.message);
      // toast.error('Internal Server Error');
      res.status(500).send("Some Error Occured!!!");
    }
  }
);
// ROUTE 2: Authenticate a User(Login a user) using : POST "api/auth/login". NO login required.
router.post(
  "/loginstudent",
  [
    // body('email', 'Enter a value Email').isEmail(),
    // body('password', 'Enter a value Email').exists()
  ],
  async (req, res) => {
    // If there are errors, return the bad request and the errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      toast.error("Enter Correct Credentials");
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let student = await Students.findOne({ email });
      if (!student) {
        toast.error("Email not Registered, Please Signup");
        return res.status(400).json({ error: "Email not Registered" });
      }

      const comparePassword = await bcrypt.compare(password, student.password);
      if (!comparePassword) {
        toast.error("Incorrect Password");
        return res.status(400).json({ error: "Incorrect Password" });
      }

      const data = {
        student: {
          id: student.id,
        },
      };
      const authToken = jwt.sign(data, process.env.JWT_SECRET);
      res.json({ authToken });
    } catch (error) {
      console.log(error.message);
      toast.error("Internal Server Error");
      res.status(500).send("Some Error Occured");
    }
  }
);
//admin login route

router.post(
  "/Adminlogin",
  [
    // body('email', 'Enter a value Email').isEmail(),
    // body('password', 'Enter a value Email').exists()
  ],
  async (req, res) => {
    // If there are errors, return the bad request and the errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      toast.error("Enter Correct Credentials");
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let prov = await Provider.findOne({ email });
      console.log(prov.email);
      if (!prov) {
        toast.error("Email not Registered, Please Signup");
        return res.status(400).json({ error: "Email not Registered" });
      }

      const comparePassword = await bcrypt.compare(password, prov.password);
      if (!comparePassword) {
        toast.error("Incorrect Password");
        return res.status(400).json({ error: "Incorrect Password" });
      }

      const data = {
        admin: {
          id: prov.id,
          name: prov.name,
        },
      };
      const authToken = jwt.sign(data, process.env.JWT_SECRET);
      res.json({ authToken });
    } catch (error) {
      console.log(error.message);
      toast.error("Internal Server Error");
      res.status(500).send("Some Error Occured");
    }
  }
);

// ROUTE 3: Get logged in User's Detail using : POST "api/auth/getuser". Login required.
router.post("/getstudent", fetchStudent, async (req, res) => {
  try {
    studentid = req.student.id;
    const student = await Students.findById(studentid).select("-password");
    res.send(student);
  } catch (error) {
    console.log(error.message);
    toast.error("Internal Server Error");
    res.status(500).send("Some Error Occured");
  }
});
router.post("/getstudent/:id", async (req, res) => {
  try {
    studentid = req.params.id;
    const student = await Students.findById(studentid);
    res.send(student);
  } catch (error) {
    console.log(error.message);
    toast.error("Internal Server Error");
    res.status(500).send("Some Error Occured");
  }
});

module.exports = router;
