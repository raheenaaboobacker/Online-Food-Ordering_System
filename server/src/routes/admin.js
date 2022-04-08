const express=require("express");
const Router=require("express")
const adminRouter=express.Router();
const productsdata=require("../models/products")
const categorydata=require("../models/category")
const multer=require("multer")
var storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"../client/public/upload")
    },
    filename: function(req,file,cb){
        cb(null,req.body.name)
    }
})
var upload=multer({storage:storage})
adminRouter.post('/upload',upload.single("file"),(req,res)=>{
return res.json("file uploaded")
})
adminRouter.post('/addcategory',((req,res)=>{
    var data={
        categoryName:req.body.categoryName,

        image:req.body.image
    }
    const category=categorydata(data);
    category.save().then((data)=>{
        console.log(data);
       

    })
}))
adminRouter.post('/additem',((req,res)=>{
    var item = {
        category_id:req.body.category_id,
        productName:req.body.name,
        price:req.body.price,
        image:req.body.image,
        instock:req.body.instock
       
    }
    var products=productsdata(item);
    products.save().then((data)=>{
        console.log(data)
        // console.log("data saveved");
    })
}))

adminRouter.post('/adminhome',((req,res)=>{
    categorydata.find().then((data)=>{
console.log("category data"+data); 
res.status(200).json({data:data})
   })
}))
adminRouter.get('/showitems/:id',((req,res)=>{
    const id=req.params.id
    productsdata.find({category_id:id})
    .then((data) => {
        console.log("products data is" +
            data)
            res.status(200).json({data:data})

    })
}))
adminRouter.get('/findUpdateId/:id',((req,res)=>{
    const id=req.params.id;
    console.log("to update"+id);
        productsdata.find({_id:id})
    .then((data)=>{
        res.status(200).json({data:data})
    })
}))
adminRouter.post('/updateitem',((req,res)=>{
   var item={
       category_id:req.body.category_id,
       _id:req.body._id,
       productName:req.body.productName,
       price:req.body.price,
       image:req.body.image,
       instock:req.body.instock

   }
   console.log("updatedddd idd"+item._id);
   productsdata.findByIdAndUpdate({_id:item._id},item).then((demo)=>{
       console.log("updatedd data"+demo);
   })
}))
adminRouter.delete('/deletecategory/:id',((req,res)=>{
    const id=req.params.id;
        console.log("deleted id"+id);
    
        productsdata.find({category_id:id}).then((data)=>{
            console.log("datas in product with category id"+ typeof data)
       
        if(data.toString()==""){
            categorydata.findByIdAndDelete({_id:id}).then((data)=>{
                console.log("deleted data is"+data)
            })
            // res.json("empty")
        }else{
           
                res.json("categoryy containss data...cannot delete!!!")
          
        }
    })  
}))
adminRouter.delete('/deleteitem/:id',((req,res)=>{
    var id=req.params.id;
    console.log("item deleted"+id)
    productsdata.findByIdAndDelete({_id:id}).then((data)=>{
        console.log("deleted data is"+data)
    })
}))
module.exports=adminRouter