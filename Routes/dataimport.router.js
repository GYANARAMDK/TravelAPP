const express=require('express')
const router=express.Router()

const Hotel=require('../Model/hotel.model.js')
const hotels=require('../Data/hotels.js')
router.post('/',async(req,res)=>{
   try {
    await Hotel.deleteMany();
    const hotelsisDB= await Hotel.insertMany(hotels.data)
    console.log("hotels data added to db")
    res.json(hotelsisDB)
   } catch (error) {
    console.log(error)
    res.json({message:"could not add data to db"})
   }
})
module.exports=router;