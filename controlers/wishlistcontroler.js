const Wishlist=require('../Model/wishlist.model')
const createwishlisthandler=async(req,res)=>{
    const newwishlist=new Wishlist(req.body);
    try {
        const savedwishlist =await newwishlist.save();
        res.status(201).json(savedwishlist)
    } catch (error) {
        res.status(500).json({message:"failed to add wishlist"})
    }
}
const deletewishlisthandler=async(req,res)=>{
    try {
        await Wishlist.findByIdAndDelete(req.params.id);
        res.json({message:"hotel deleted from Wishlist"})
    } catch (error) {
        res.status(500).json({message:"could not delete hotel from wishlist"})
    }
}
const getwishlisthandler=async (req,res)=>{
    try {
        const wishlist=await Wishlist.find({});
        wishlist?res.json(wishlist):res.json({message:"not item added to wishlist"});
    } catch (error) {
        console.log(error)
    }
}
module.exports={deletewishlisthandler,createwishlisthandler,getwishlisthandler};