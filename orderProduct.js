const Mongoose= require("mongoose");
const orderProduct=new Mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product',
    },
    totalPrice:
    {
        type:Number,
    },
    quantity:{
        type:Number,
    },
})
module.export=mongoose.model("order",orderProduct);