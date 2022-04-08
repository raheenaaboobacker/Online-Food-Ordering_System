const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://raheena:raheena%40123@cluster1.zmtjd.mongodb.net/userdb?retryWrites=true&w=majority",()=>console.log("dbconnected !!"))
const Schema=mongoose.Schema;

const categorySchema= new Schema({
    
    categoryName:String,
    image:String
},{strict:false});
var categorydata=mongoose.model('categorydata',categorySchema);
module.exports=categorydata;