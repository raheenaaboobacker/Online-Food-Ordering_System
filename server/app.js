
const express=require("express");
const cors=require("cors")
const app=express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))       
// middlware function 

const userRouter=require('./src/routes/user');
const adminRouter=require('./src/routes/admin')
app.use('/',userRouter)
app.use('/admin',adminRouter)
app.listen(5000,function(){
    console.log("listening to: http://localhost:5000/")
});
// app.use('/api/',userRouter)    //connect router
// app.use('/api/admin',adminRouter)
// app.use(express.static(path.join(__dirname,"./build")))
// app.get("/*",(req,res)=>{res.sendFile(path.join(__dirname,"./build"))})
// const PORT=process.env.PORT||2000
// app.listen(PORT, function() {
//     console.log("server is running")
// })