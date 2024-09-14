const express=require('express');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 4000;
const app =express()
const dotenv=require('dotenv')
dotenv.config();
const hoteldataaddedtorouter=require('./Routes/dataimport.router.js')
const categorydataaddedtorouter=require('./Routes/categoryimport.router.js')
const mongoose=require('mongoose')
const connectdb=require('./Config/dbconfig.js')
connectdb();
app.use(express.json())
const hotelrouter=require('./Routes/hotel.router.js')
app.get('/',(req,res)=>{
    res.send("hello bhdk")
})
const Wishlistrouter=require('./Routes/wishlist.router.js')
app.use('/api/wishlist',Wishlistrouter)
const authrouter=require('./Routes/auth.router.js')
app.use('/api/auth',authrouter);
const singlehotelrouter=require('./Routes/singlehotel.router.js')
app.use('/api/hotels',singlehotelrouter)
const categoryrouter=require('./Routes/category.router.js')
app.use('/api/category',categoryrouter);
app.use('/api/categorydata',categorydataaddedtorouter);
app.use('/api/hoteldata',hoteldataaddedtorouter);
app.use('/api/hotels',hotelrouter)//localhost:3000/api/hotels/hotelcategory
mongoose.connection.on("error", (err) => {
    console.error("Connection error:", err);
  });
mongoose.connection.once("open",()=>{
    console.log("connected to db")
    app.listen(port,()=>{
        console.log("server is running");
    })
})
 
