const express = require('express');
const Students = require('../models/StudentsData');
const Organisations = require('../models/Organisation');
const Apply = require('../models/Apply');
const fetchStudent = require('../middleware/fetchStudent');
// const fetchProfessional = require('../middleware/fetchProfessional');
// import Students from "../../client/src/admin_component/Students";

const router = express.Router();

// ROUTE 1: student booking appointment of a organisation : POST "api/booking/bookappointment". Login required.
router.post('/createapplication', fetchStudent, async (req, res) => {

    try {
        studentid = req.student.id;
        const student = await Students.findById(studentid).select("-password");
        
        organisationid = req.body.id;
        const organisation = await Organisations.findById(organisationid);
        
        // const { timing } = req.body;

        apply = await Apply.create({
            studentid: student.id,
            studentname: student.name,
            studentemail: student.email,
            studentmobile: student.mobile,
            studentaddress: student.address,
            studentdate_of_birth: student.date_of_birth,
            studentcountry: student.country,
            studentgender: student.gender,
            studentcollege_name: student.college_name,
            studentuid: student.uid,
            studentcgpa: student.cgpa,
            studentdegree: student.degree,
            organisationid: req.body.organisationid,
            organisationtitle: organisation.title,
            organisationdegrees: organisation.degrees,
            organisationfunds: organisation.funds,
            organisationdate: organisation.date,
            organisationlocation: organisation.location,
            status: "Applied"
        })
        res.send(apply);
    } catch (error) {
        console.log(error.message);
        // toast.error('Internal Server Error');
        res.status(500).send("Some Error Occured");
    }
})

module.exports = router;