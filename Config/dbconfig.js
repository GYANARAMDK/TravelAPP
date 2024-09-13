const mongoose=require('mongoose')

const connectdb= async()=>{
   try {
    await mongoose.connect(process.env.Database_uri,{
      
       
       })
       console.log("we are connected to server successfully")
   } catch (error) {
    console.log(error);
   }
}
module.exports=connectdb;