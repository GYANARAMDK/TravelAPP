const express=require('express')
const router=express.Router()

const Category=require('../Model/category.model.js')
const category=require('../Data/category.js')
router.post('/',async(req,res)=>{
   try {
    await Category.deleteMany();
    const categoryisDB= await Category.insertMany(category.data)
    console.log("hotels category data added to db")
    res.json(categoryisDB)
   } catch (error) {
    console.log(error)
    res.json({message:"could not add category data to db"})
   }
})
module.exports=router;