const catchAsyncErrors = require("../middlewares/catchAsyncError");
const ErrorHander = require("../utilis/errorhandler");
const jwt = require("jsonwebtoken");
const User = require("../models/user");





exports.isAuthenticated = catchAsyncErrors(async(req,res,next)=>{
   
    const {token} = req.cookie;

    if(!token){

        return next(new ErrorHander("Please login to access this resource",401));
    }

    const decodedData = jwt.verify(token,process.env.JWT_secret);

   req.user =  await User.findById(decodedData.id);


   next();
});

exports.authorizeRoles = (...roles) =>  {

    return(req,res,next) =>{
        if(!roles.include(req.user.role)){
         return next(new ErrorHander(
            `Role: ${req.user.role}is not allowed to access this resource`,403
         )
          );
        }
       next();
    };
};
