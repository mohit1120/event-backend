// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const router = express.Router();
// const jwt = require("jsonwebtoken");
// const localStorage = require("localStorage");

// //To get secret key
// require("dotenv").config();
// const jwt_key = process.env.secret_key;

// //For event schema
// const Exam = require("../../model/user/exam");

// router.post("/exam", (req, res) => {
//   Exam.find({ id: req.body.id })
//     .exec()
//     .then((exam) => {
     
//       if (exam && exam.length > 0) {
//        const {question_detail}=req.body;
//        if(Objects.keys(question_detail).length>0){

//         exam.update(question:question_detail});
//        }

//       } else {
//         const event = new Event({
//           id: req.body.id,
//           name: req.body.name,
//           date: new Date(),
//           description: req.body.description,
//           created_by: req.body.email,
//         });

//         event
//           .save()
//           .then((event) => {
//             console.log("Inserted event is:", event);
//             return res.status(200).json({
//               message: "",
//               success: true,
//             });
//           })
//           .catch((err) => {
//             console.log(err);
//             return res.status(500).json({
//               message: "Something went wrong",
//               success: false,
//             });
//           });
//       }
//     })
//     .catch((err) => {
//       console.log("Error occured");
//       res.status(500).json({
//         error: err,
//         message: "Something went wrong",
//       });
//     });
// });

// //To get all events data
// router.get("/eventlist", (req, res) => {
//   Event.find({})
//     .exec()
//     .then((events) => {
//       console.log("Details of an event is:", events);
//       return res.status(200).json({
//         events: events,
//         success: true,
//       });
//     })
//     .catch((err) => {
//       message: "No event occured";
//     });
// });

// //To get event data created by user
// router.get("/event", (req, res) => {
//   console.log(req.params.email);
//   Event.find({ created_by: req.query.email })
//     .exec()
//     .then((events) => {
//       console.log("Details of an event is:", events);
//       return res.status(200).json({
//         events: events,
//         success: true,
//       });
//     })
//     .catch((err) => {
//       message: "No event occured";
//     });
// });

// module.exports = router;
