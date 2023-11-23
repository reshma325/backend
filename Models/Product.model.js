import mongoose, { Schema } from "mongoose";
const Product=new Schema({
    name:String,
    price:Number,
    image:String,
    category:String,
    id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",

    }
},{timestamps:true})
export default mongoose.model('Product',Product);