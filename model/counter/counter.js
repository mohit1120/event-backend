const mongoose = require('mongoose');


const counterSchema = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    sequence_value: {
        type: Number,
        required: true
    }
})



module.exports = mongoose.model("counter", counterSchema);