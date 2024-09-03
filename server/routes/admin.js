const express = require("express");
const Note = require("../models/adminmodel");
const router = express.Router();
const fetchStudent = require("../middleware/fetchStudent");

const fetchAdmin = require("../middleware/fetchAdmin");
router.post("/admindata", [], async (req, res) => {
  console.log(req.body);

  try {
    const newnote = await Note.create(req.body);
    res.status(200).json(newnote);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

router.get("/admindata", fetchAdmin, async (req, res) => {
  // try {
  //     const notes = await Note.find({})
  //     return res.status(200).json({
  //         count: notes.length,
  //         data: notes
  //     })
  // } catch (error) {
  //     console.log(error.message)

  // }
  try {
    const notes = await Note.find({});
    res.status(200).json({ note: notes });
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/admindata/:id", async (req, res) => {
  // const { id } = req.params
  // try {
  //     const notes = await Note.findById(id)
  //     return res.status(200).json(notes)
  // } catch (error) {
  //     console.log(error.message)

  // }
  // res.send(req.params.id)
  //console.log("getone request")
  try {
    const { id: noteid } = req.params;
    const note = await Note.findOne({ _id: noteid });
    if (!note) {
      return res.status(404).json({ msg: `no result with id ${noteid}` });
    }
    res.status(200).json({ note });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

router.patch("/admindata/:id", async (req, res) => {
  try {
    const { id: taskid } = req.params;
    const note = await Note.findOneAndUpdate({ _id: taskid }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!note) {
      return res.status(404).json({ msg: "no such note" });
    }

    res.status(200).json({ noteupdated: note });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});
router.get("/admingetdata/:providerId", [], async (req, res) => {
  // try {
  //     const notes = await Note.find({})
  //     return res.status(200).json({
  //         count: notes.length,
  //         data: notes
  //     })
  // } catch (error) {
  //     console.log(error.message)

  // }
  try {
    const id = req.params.providerId;
    // console.log(req.params);
    const notes = await Note.find({ provider: id });
    // console.log(notes)
    res.status(200).json({ note: notes });
  } catch (error) {
    res.status(500).json({ msg: "an error occured" });
  }
});

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
