const jwt=require('jsonwebtoken')
const CryptoJS=require('crypto-js')
const User=require('../Model/user.model')
const logincontroler=async (req,res)=>{
    try {
        const loginuser=await User.findOne({number:req.body.number})
        !loginuser&& res.status(401).json({message:"invalid mobile number"})
        const decodedpassword= CryptoJS.AES.decrypt(loginuser.password,process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);
        console.log(decodedpassword)
        decodedpassword!==req.body.password&&res.status(401).json({message:"incorrect password"})
        const {password,...rest}=loginuser._doc;
        const accesstoken=jwt.sign({username:loginuser.username},process.env.ACCESS_TOKEN)
        // res.cookie("token",accesstoken)
        res.json({...rest,accesstoken});
    } catch (error) {
        console.log(error)
        res.json("fuck you")
    }
}
module.exports=logincontroler;