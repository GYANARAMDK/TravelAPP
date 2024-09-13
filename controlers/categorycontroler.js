const Category=require('../Model/category.model.js')

const Categoryhandler=async(req,res)=>{
    try {
         const categories=await Category.find({}) 
         res.json(categories)
        } catch (error) {
        res.status(404).json({message:"could not get categories data"})
    }
}

module.exports=Categoryhandler;