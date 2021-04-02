const { Mongoose } = require("mongoose");

const sell_product=new Mongoose.Schema({
    productid:{
        type:Number,
    },
    userid:{
        type:Number,
    },
    price:
    {
        type:Number,
    },
    quantity:{
        type:Number,
    },
    name:{
        type:String,
    },
    city:{
        type:String,
    },
    country:{
        type:String,
    }
})