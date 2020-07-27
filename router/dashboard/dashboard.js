const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const localStorage = require("localStorage");

//To get secret key
require("dotenv").config();
const jwt_key = process.env.secret_key;

//For event schema
const Event = require("../../model/event/event");

router.post("/addevent", (req, res) => {
  Event.find({ id: req.body.id })
    .exec()
    .then((event) => {
      try {
        req.body = JSON.parse(req.body);
      } catch (e) {
        console.log(req.body);
      }
      console.log("Event alreday exist:", event);

      if (event && event.length > 0) {
        console.log("Event alreday exist:", event);
        return res.status(200).json({
          message: "Event already exist",
          success: false,
        });
      } else {
        const event = new Event({
          id: req.body.id,
          name: req.body.name,
          date: new Date(),
          description: req.body.description,
          created_by: req.body.email,
        });

        event
          .save()
          .then((event) => {
            console.log("Inserted event is:", event);
            return res.status(200).json({
              message: "",
              success: true,
            });
          })
          .catch((err) => {
            console.log(err);
            return res.status(500).json({
              message: "Something went wrong",
              success: false,
            });
          });
      }
    })
    .catch((err) => {
      console.log("Error occured");
      res.status(500).json({
        error: err,
        message: "Something went wrong",
      });
    });
});

//To get all events data
router.get("/eventlist", (req, res) => {
  Event.find({})
    .exec()
    .then((events) => {
      console.log("Details of an event is:", events);
      return res.status(200).json({
        events: events,
        success: true,
      });
    })
    .catch((err) => {
      message: "No event occured";
    });
});

//To get event data created by user
router.get("/event", (req, res) => {
  console.log(req.params.email);
  Event.find({ created_by: req.query.email })
    .exec()
    .then((events) => {
      console.log("Details of an event is:", events);
      return res.status(200).json({
        events: events,
        success: true,
      });
    })
    .catch((err) => {
      message: "No event occured";
    });
});

//To remove an event
router.post("/remove", (req, res) => {
  const {id,email} = req.body;
  console.log("Details to remove events are:", id, email);
  Event.find({ id: id })
    .exec()
    .then((event) => {
      try {
        req.body = JSON.parse(req.body);
      } catch (e) {
        console.log(req.body);
      }
     
      if (event && event.length < 1) {
        console.log("Event doesn't exist with this passcode");
        return res.status(200).json({
          message: "No Event exist with this passcode",
          success: true,
        });
      } else {
        Event.deleteMany({id:id,email:email})
        .exec()
        .then((event)=>{
          return res.status(200).json({
            message:"",
            status:true
          })
        })
          .catch((err) => {
            console.log(err);
            return res.status(500).json({
              message: "Something went wrong",
              success: false,
            });
          });
      }
    })
    .catch((err) => {
      console.log("Error occured");
      res.status(500).json({
        error: err,
        message: "Something went wrong",
      });
    });
});



module.exports = router;
