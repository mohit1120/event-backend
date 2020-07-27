const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyparser = require('body-parser');

//require('dotenv').config()

const cors=require('cors');
//To create server
const app = express();
app.use(cors());
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 })
//for db connection
const connectDB = require('./config');
connectDB();

//setting Middleware bodyparser
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());

//setting static folders 
app.use(express.static(__dirname + '/public'));

//setting views
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');




const mongoose = require('mongoose');
const Counter = require('./model/counter/counter');
const Exam = require('./model/exam/exam');


function getValueForNextSequence(sequenceOfName){
  var sequenceDoc = connectDB.Counter.findAndModify({
      query:{_id: sequenceOfName },
      update: {$inc:{sequence_value:1}},
      new:true
      });
    return sequenceDoc.sequence_value;
}


//For testing counter



// app.get("/data", (req, res)=>{
//   console.log("data entered:",req.body);
//   // const counter = new Counter({
//     // id: req.body.id,
//     // sequence_value: req.body.sequence_value
//     id:"id",
//     sequence_value:"0"
//   // });
//   counter
//   .save()
//   .then((counter) =>{
//     return res.status(200).json({
//       data: counter,
//       message:"data Inserted successfully"
//     })
//   })
//   .catch((err)=>{
//     return res.status(404).json({
//       err: "Something went wrong"
//     })
//   })
// })



app.get('/exam', (req, res)=>{
  const exam = new Exam({
    question_id: getValueForNextSequence("id"),
  })
})









//for actual routes
const User = require('./router/user/user');
app.use('/', User);
const Dashboard = require('./router/dashboard/dashboard');
app.use('/', Dashboard);

app.get('/', (req, res)=>{
     res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 1 }));
});

app.listen(process.env.PORT || 3000);

