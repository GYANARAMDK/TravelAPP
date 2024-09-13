const Hotel=require('../Model/hotel.model')
const singlehotelhandler=async(req,res)=>{
    try {
     const {id}=req.params;
     const hotel=await Hotel.findById(id);
     res.json(hotel)
    } catch (error) {
     res.status(404).json({message:"can't find the hotel"})
    }
}

module.exports=singlehotelhandler;
