const mongoose = require("mongoose");
const validator = require("mongoose");


const userSchema = new mongoose.Schema({
    
        name: {
          type: string,
          required: [true, "please Enter your Name"],
          maxLength: [30, "Name exceed the max limit"],
          minLength: [6, "please provide the min string"],
        },
        email: {
          type:string,
          required:[true,"please provide the email"],
          Unique:true,
          validate:[validator.isEmail,"please enter the valid email"]
    
        },

        password:{

            type:String,
            required:[true,"please enter password"],
            minLength:[8,"please provide the min charaters "],
            select:false,
        },

        avatar:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            },
          },
        
        ],
        role:{
            type:String,
             default:true
        },
      
   resestPasswordToken:String,
   resetPasswordExpire:Date,


});

module.exports = mongoose.model("User",userSchema);

