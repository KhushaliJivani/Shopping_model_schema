const Mongoose= require("mongoose");
const orderProduct=new Mongoose.Schema({
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product',
    },
    Price:
    {
        type:Number,
    },
    quantity:{
        type:Number,
    },
})
module.export=mongoose.model("order",orderProduct);