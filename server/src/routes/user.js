const express=require("express");
const Router=require("express")
const userRouter=express.Router();
const userdata=require('../models/userdata');
var jwt=require("jsonwebtoken");
const check=require('../middleware/chech-auth');
var bcrypt=require("bcrypt");
const productsdata = require("../models/products");
const categorydata=require("../models/category")
const cartdata = require("../models/cart");
const { response } = require("express");
const {OAuth2Client}=require('google-auth-library')
const client= new OAuth2Client("302497682067-pb44ii1kcldeato5m754ftj600tsp9on.apps.googleusercontent.com")
// const cartdata=require("../models/cart")
userRouter.post('/register',function(req,res){
    console.log(" running")
    bcrypt.hash(req.body.password, 10, function(err, hash) {
       
   
    var item = {
        uname:req.body.uname,
        email: req.body.email,
        address:req.body.address,
        password:hash
       
    }
    var user=userdata(item);
    user.save().then((data)=>{
        console.log(data)
    })
    });
})
userRouter.post('/login',(req,res)=>{
    var i = {
        email: req.body.email,
        password: req.body.password
    }
console.log("i"+JSON.stringify(i))
    var n = i.email;
     var p = i.password
    
    userdata.findOne({
        email:i.email
    }).then((demo)=>{
        console.log("demo"+demo)
        if (demo) {
           
     return bcrypt.compare(req.body.password,demo.password).then((result)=>{
         console.log("result"+result);
         if(result){
                var token=jwt.sign({email:demo.email},"key")           //generate token
                console.log(token)
                res.status(200).json({data:'true',useremail:demo.email,userid:demo._id,username:demo.uname,token:token})
         }
         else{
            res.json({data:'password not found'})
            console.log("password not found")
         }
     })
     
    }else{
        res.json({data:'user not found'})
        console.log("user not found")
     }
})
   
    
})
userRouter.post('/googlelogin',(req,res)=>{
    const {tokenId}=req.body;
    console.log(tokenId);
    client.verifyIdToken({idToken:tokenId,audience:"302497682067-pb44ii1kcldeato5m754ftj600tsp9on.apps.googleusercontent.com"}).then(response=>{
        const {email_verified,name,email}=response.payload;
        console.log("detailssss"+JSON.stringify(response.payload.email));

        userdata.findOne({
            email:response.payload.email
        }).then((data)=>{
       console.log(("google login"+data));
       if(data){
        var token=jwt.sign({email:data.email},"key")           //generate token
        console.log(token)
        res.status(200).json({useremail:data.email,userid:data._id,username:data.uname,token:token})   
       }else{
           res.status(200).json("no-user") 
               
       }
    })

       
    })
})
userRouter.get('/home',(req,res)=>{
    productsdata.find().then((data)=>{
        // console.log("category data"+data); 
        res.status(200).json({data:data})
           })
})
userRouter.get('/userhome',check,((req,res)=>{
    let tokenName=req.userData.name;

console.log("tokenNameeeeee"+tokenName);
    productsdata.find().then((data)=>{
// console.log("category data"+data); 
res.status(200).json({data:data,data:tokenName})
   })
}))
userRouter.get('/showCategory',((req,res)=>{
   
    categorydata.find().then((data)=>{
// console.log("category data"+data); 
res.status(200).json({data:data})
   })
}))
// userRouter.get('/showproduct/:id',((req,res)=>{
//     const id=req.params.id
//     console.log("id"+id);
//     // productsdata.find({category_id:id})
//     // .then((data) => {
//     //     // console.log("products data is" +
//     //     //     data)
//     //         res.status(200).json({data:data})

//     // })
// }))
// userRouter.post('/showproduct/:id',((req,res)=>{
//     const id=req.params.id;
//     console.log("category id"+id);
// }))
userRouter.get('/showitems/:id',((req,res)=>{
    const id=req.params.id
    productsdata.find({category_id:id})
    .then((data) => {
        console.log("products data is" +
            data)
            res.status(200).json({data:data})

    })
}))
userRouter.get('/singleitem/:id',((req,res)=>{
    const id=req.params.id;
    // console.log("to show"+id);
        productsdata.find({_id:id})
    .then((data)=>{
        res.status(200).json({data:data})
    })
}))
userRouter.post('/addcartdata/:id/:quantity/:userid',((req,res)=>{
    const id=req.params.id;
    const quantity=req.params.quantity
    const userid=req.params.userid
    console.log(userid);
    var total
    console.log("to cart"+id);
        productsdata.find({_id:id})
    .then((data)=>{
        total=data[0].price*quantity;
      console.log(total);
      var item={
        product_id:id,
        user_id:userid,
        qt:quantity,
        total:total
      }
    //   console.log(item)
      const cart=cartdata(item)
      cart.save().then((response)=>{
          console.log(response)
      })
    })
    
}))
userRouter.post('/getCartData/:id',((req,res)=>{
    const id=req.params.id;
    // console.log(id);
    var totalamount=0
    // console.log(id); cartdata.find({user_id:id})
    // .then((resp)=>{
    //     console.log(resp.product_id);
    //     productsdata.find({_id:resp.product_id}).then((pdata)=>{
    //          console.log("aggregated data"+JSON.stringify(pdata));
    //         res.status(200).json({data:resp,pdata:pdata})
    //     })
    // })
    // cartdata.aggregate([
    // {$lookup: {
    //     "from": "userdatas",
    //     "let": {"userid": "$id"},
    //     pipeline: [
    //       {
    //         "$match": {
    //           "$expr": {
    //             "$in": ["$$userid", "$user_id"],  
    //           },
    //         },
    //       },
    //     ],
    //     as: "details"
    //   }}])
//     {
//         $lookup: {
//           from: "userdatas",
//           let: {id: "$user_id"},
//           pipeline: [
//             {$project: {_id: 1, bid: {"$toObjectId": "$$id"}}},
//             {"$match": {"expr": {$eq: ["$_id", "$bid"]}}}],
//           as:"b"
// }}])
// //       .then((resp)=>{
// //         console.log("aggregated data"+JSON.stringify(resp));
// //     })
cartdata.aggregate([
    
  {  $lookup:
    {
        from:'userdatas',
        localField:'user_id',
        foreignField:'_id',
        as:'orderdetails'
    }},
    {$lookup:
    {
        from:'productsdatas',
        localField:'product_id',
        foreignField:'_id',
        as:'productdetails'
    }
    }
    

])
.then((resp)=>{
    // console.log("aggregated data"+JSON.stringify(resp));
    
      res.status(200).json({data:resp})
})
}))
userRouter.delete('/deleteCartItem/:id',(req,res)=>{
    const id=req.params.id
    console.log(id);
    cartdata.findByIdAndDelete({_id:id}).then((resp)=>{console.log("deleted data"+resp);})
})
userRouter.post('/rating/:id/:p_id:/rate:/reviews',(req,res)=>{
const id=req.params.id
const P_id=req.params.P_id
const rate=req.params.rate
const reviews=req.params.reviews
})

module.exports=userRouter;