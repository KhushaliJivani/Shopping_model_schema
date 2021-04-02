const Mongoose = require("mongoose");

const product=new Mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    productName:{
        type:String,
    },
    productPrice:{
        type:Number,
    },
    quantity:{
        type:Number,
    }

})
module.exports=mongoose.model("product",product);