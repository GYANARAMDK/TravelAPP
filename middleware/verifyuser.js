const jwt =require('jsonwebtoken')
const verifyuser=(req,res,next)=>{
    //const token=req.cookies.token;
   
   try{ 
    const token = req.headers.authorization;
    console.log(token)
    if(token){
        jwt.verify(token,process.env.ACCESS_TOKEN,(err,user)=>{
            if(err){
                res.status(403).json({message:"invalid token"})
            }
            req.user=user;
            next();
        })
    }
}catch(error){
          console.log(error)
          res.josn({message:"randi mera program"})
}
}
module.exports=verifyuser;