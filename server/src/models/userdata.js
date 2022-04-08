const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://raheena:raheena%40123@cluster1.zmtjd.mongodb.net/userdb?retryWrites=true&w=majority",()=>console.log("dbconnected !!"))
const Schema=mongoose.Schema;

const userSchema= new Schema({
    name:String,
    password:String
},{strict:false});
var userdata=mongoose.model('userdata',userSchema);
module.exports=userdata;
