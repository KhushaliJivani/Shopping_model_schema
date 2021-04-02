const Mongoose  = require("mongoose");
const userSchema=new Mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    },
    mobileNo:{
        type:Number,
    },
    password:{
        type:String,
        required:true,
    },
},
{
    timestamps:true,
})
module.exports=mongoose.model("user",userSchema);