const { Mongoose } = require("mongoose");

const cart_product=new Mongoose.Schema({
    userid:{
        type:Number,
    },
    productid:{
        type:Number,
    },
    sell_product_name:{
        type:String,
    },
    quantity:{
        type:Number,
    },
    price:{
        type:Number,
    },
    isActive:{
        type:Boolean,
    }

})