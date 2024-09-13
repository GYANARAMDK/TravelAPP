const express=require('express')

const dotenv=require('dotenv')
dotenv.config();

const router=express.Router();

const signuphandler=require('../controlers/signupcontrolers')
const logincontroler=require('../controlers/logincontrolers')

router.post('/register',signuphandler)
router.post('/login', logincontroler)

module.exports=router;