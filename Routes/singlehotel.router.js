const express=require('express')
const router=express.Router();


const singlehotelhandler=require('../controlers/singlehotelcontroler')

router.get('/:id',singlehotelhandler)

module.exports=router;