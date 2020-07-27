const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:String,
    desc:String,
    questions:[
    {   id:int,
        question:String,
        options:
          [{ option : String,
           id:int}],
        answer:int,
        correct:int,
        incorrect:int
        
    }],
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    }
})


module.exports = mongoose.model('User', userSchema);