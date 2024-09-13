const Hotel=require('../Model/hotel.model');

const getALLhotelhandler=async (req,res)=>{
    const hotelcategory=req.query.category
    console.log(hotelcategory)
   try{
     let hotels;
     if(hotelcategory){
           hotels=await Hotel.find({category:hotelcategory})
     }else{
        hotels=await Hotel.find({});
     }
     hotels ? res.json(hotels) : res.status(404).json({message: "page not load"});
    
   }catch(err){
      console.log(err);
      res.status(500).json({message:"server Error"})
   }
}

module.exports=getALLhotelhandler;