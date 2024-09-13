const jwt=require('jsonwebtoken')
const CryptoJS=require('crypto-js')
const User=require('../Model/user.model')
const signuphandler=async(req,res)=>{
    const {username,email,password,number}=req.body;
    try {
       
       const newuser= await User.create({
           username,
           number,
           email,
           password:CryptoJS.AES.encrypt(req.body.password,process.env.PASSWORD_SECRET_KEY).toString()
       })
       
       res.status(201).json(newuser);
    } catch (error) {
       res.status(500).json({message:"error creating  a user"})
       console.log(error);
    }
}
module.exports=signuphandler;