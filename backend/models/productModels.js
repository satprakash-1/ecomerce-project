const mongoose= require("mongoose");

const productSchema = new mongoose.Schema({

    name:{
        type:string,
        required:[true,"please enter product name"]
    },
    description:{
        type:string,
        required:[true,"please enter product description"]
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
        public_id:{
            type:string,
            required:true
        },
        url:{
            type:string,
            required:true
        }
    }
    ],
    category:{
         type:string,
         required:[true,"please provide the category"]
    },
    stock:{
        type:Number,
        required:[true,"please Enter the product stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },
    numofReviews:{
        type:Number,
        default:0
    },
    Reviews:[
        {
        name:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true,
        },
        comment:{
            type:string,
            required:true
        }
    }
    ],

    
    createdAt:{
        type:Date,
        default:Date.now
    }
})

Module.exports = mongoose.model("Product",productSchema);



