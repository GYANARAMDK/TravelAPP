const express=require('express')
const router=express.Router();

const Categoryhandler=require('../controlers/categorycontroler')

router.get('/',Categoryhandler)

module.exports=router;