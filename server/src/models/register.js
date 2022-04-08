const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://raheena:raheena%40123@cluster1.zmtjd.mongodb.net/userdb?retryWrites=true&w=majority",()=>console.log("dbconnected !!"))
const Schema=mongoose.Schema;

const registerSchema= new Schema({
    // user_id: { type: Schema.Types.ObjectId, ref: "userdata", required: true },
    username:String,
   email:String,
   phoneno:String,
   place:String
},{strict:false});
var registerdata=mongoose.model('registerdata',registerSchema);
module.exports=registerdata;