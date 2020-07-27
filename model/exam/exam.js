const mongoose = require('mongoose');


const examSchema = mongoose.Schema({
    question_id: {
        type: String,
        require: true
    },
  
})



module.exports = mongoose.model("exam", examSchema);