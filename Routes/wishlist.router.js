const express=require('express')
const router=express.Router();

const VerifyUser=require('../middleware/verifyuser')

const wishlistcontroler=require('../controlers/wishlistcontroler')

router.post('/',wishlistcontroler.createwishlisthandler);
router.delete('/:id',wishlistcontroler.deletewishlisthandler)
router.get('/',wishlistcontroler.getwishlisthandler)

module.exports=router;