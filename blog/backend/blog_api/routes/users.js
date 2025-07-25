var express = require('express');
var router = express.Router();
let userController = require('../controller/user')


/* GET users listing. */
router.post('/signup',userController.userSignup)
router.post('/login',userController.userLogin)
router.get('/find',userController.GetAllUser)
router.get('/find/:userId',userController.OneUserFind)
router.delete('/delete/:userId',userController.userDelete)
router.patch('/update/:userId',userController.userUpdate)

module.exports = router;
