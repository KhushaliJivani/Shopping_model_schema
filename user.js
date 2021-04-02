const { Mongoose } = require("mongoose");

const user=new Mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    mobileNo:{
        type:Number,
    },
    password:{
        type:
    },
    date:{
        type:Date,
        default:Date.now
    }

})