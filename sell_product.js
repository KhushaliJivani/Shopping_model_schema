const { Mongoose } = require("mongoose");

const sell_product=new Mongoose.Schema({
    userid:{
        type:Number,
    },
    sell_product_name:{
        type:String,
    },
    sell_product_detail:{
        type:String,
    },
    sell_product_price:{
        type:Number,
    },
    sell_product_quantity:{
        type:Number,
    }

})