const express = require('express');
const Note = require('../models/adminmodel');
const Student = require('../models/onemodel');
const router=express.Router()
// const fetchStudent = require('../middleware/fetchStudent');

router.post('/mypost',async (req, res) => {
   
    try {
        const newnote=await Student.create(req.body)
    res.status(200).json(newnote);
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
})
// router.get('/admingetonedata/:id',async (req, res) => {
//     // const { id } = req.params
//     // try {
//     //     const notes = await Note.findById(id)
//     //     return res.status(200).json(notes)
//     // } catch (error) {
//     //     console.log(error.message)

//     // }
//     // res.send(req.params.id)
//     console.log("getone request")
//     try {
//         const {id:noteid}=req.params;
//         const note=await Note.findOne({_id:noteid})
//         if(!note)
//         {
//             return res.status(404).json({msg:`no result with id ${noteid}`})
//         }
//         res.status(200).json({note})
//     } catch (error) {
//         res.status(500).json({msg:error})
//     }
// })



module.exports = router;