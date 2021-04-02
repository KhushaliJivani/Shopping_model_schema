const Mongoose = require("mongoose");

const product=new Mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    productName:{
        type:String,
    },
    productDetail:{
        type:String,
    },
    productPrice:{
        type:Number,
    },
    productQuantity:{
        type:Number,
    }

})
module.exports=mongoose.model("product",product);