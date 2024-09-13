const express=require('express')
const router=express.Router();

const getALLhotelhandler=require('../controlers/hotelcontroler')

router.get('/',getALLhotelhandler)

module.exports=router;
