const { status } = require('express/lib/response')
let USER = require('../model/user')
let bcrypt = require('bcrypt')

exports.userSignup = async function (req, res, next) {
    try {

        req.body.password = bcrypt.hashSync(req.body.password, 10)

        let ExistedUser = await USER.findOne({ email: req.body.email })
        if (ExistedUser) {
            throw new Error("User Already Existed");
        }

        let userData = await USER.create(req.body)
        res.status(201).json({
            status: "Success",
            message: "User Signup Successfully",
            data: userData
        })
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.userLogin = async function (req, res, next) {
    try {
        let { emailOrContact, password } = req.body

        let userData = await USER.findOne({
            $or: [
                { email: emailOrContact },
                { contact: emailOrContact }
            ]
        })
        if (!userData) {
            throw new Error("Please Enter Valid Email Or COntact");
        }

        let checkPass = bcrypt.compareSync(password, userData.password)
        if (!checkPass) {
            throw new Error("Please Enter Valid Password");
        }
        res.status(200).json({
            status: "Success",
            message: "User Login Successfully",
            data: userData
        })
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.GetAllUser = async function (req, res, next) {
    try {
        let userData = await USER.find()
        res.status(200).json({
            status: "Success",
            message: "All User Get Successfully",
            data: userData
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.OneUserFind = async function (req, res, next) {
    try {
        let userId = req.params.userId
        let userData = await USER.findById(userId)
        res.status(200).json({
            status: "Success",
            message: "One User Find Successfully",
            data: userData
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.userDelete = async function (req, res, next) {
    try {
        let userId = req.params.userId
        let userData = await USER.findByIdAndDelete(userId)
        res.status(200).json({
            status: 'Success',
            message: 'User Delete Successfulyy',
            data: userData
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.userUpdate = async function (req, res, next) {
    try {
        let userId = req.params.userId
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        let userData = await USER.findByIdAndUpdate(userId, req.body, { new: true })
        res.status(200).json({
            status: "Success",
            message: "User Update Successfully",
            data: userData
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}