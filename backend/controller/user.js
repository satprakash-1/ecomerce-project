const ErrorHander =  require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/user");
const jwt = require("jsonwebtoken");


exports.registeruser = catchAsyncErrors(async(req,res,next)=>{

    const {name,email,password} = req.body;

    const user = await User.create({

    name,email,password,
    avatar:{
        public_id:"this is a sample id",
        url:"profilepicurl",

    }
    });

    const token = User.getJWTTOKEN();

    res.status(201).json({
        success:true,
        token,
    });
   
  });


//Login User

exports.loginUser = catchAsyncErrors(async (req,res,next) => {

    const {email,password} = req.body;
     
    // checking if user has given password and email both

    if(!email || !password){
    
        return next(new ErrorHander("please provide email id and password",400));
    }

    const user = User.findOne({email}).select("+password");

    if(!user){

        return next(new ErrorHander("Invalid email or password",401));
    }
    
    const isPasswordMatched = User.comparePassword(password);

    if(!isPasswordMatched){
        return next (new ErrorHander("Invalid email or password",401));
    }


    const token = User.getJWTTOKEN();

    res.status(200).json({
        success:true,
        token,
    });

});

// logout 

exports.logout = catchAsyncErrors(async(req,res,next)=>{

    res.cookie('token',null,{
        expires: new Date(Date.now()),
        httpOnly: true,
    });

     

    res.status(200).json({

        success:true,
        message:'logged out',
    })
});


// Forgot Password

exports.forgotPassword = catchAsyncErrors(async(req,res,next)=>{

    const user = await User.findOne({email:req.body.email});

    if(!user){

       return next(new ErrorHander("User not found",404));

    }

    // Get ResetPassword Token 

    const resetTokenuser  = user.getResetPasswordToken();
     
    await user.save({ validateBeforeSave: false});


    const ResetPasswordUrl = `http://localhost/api/v1/password/reset/${resetToken}`
    
    
});