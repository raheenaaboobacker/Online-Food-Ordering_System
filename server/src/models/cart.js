const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://raheena:raheena%40123@cluster1.zmtjd.mongodb.net/userdb?retryWrites=true&w=majority",()=>console.log("dbconnected !!"))
const Schema=mongoose.Schema;

const cartSchema= new Schema({
    product_id:{type:Schema.Types.ObjectId,ref:"productsdata"},
    user_id:{type:Schema.Types.ObjectId,ref:"userdata"},
    total:String
},{strict:false});
var cartdata=mongoose.model('cartdata',cartSchema);
module.exports=cartdata;