const Product = require("../models/productModels");
const Errorhander = require("../utilis/errorhandler");
const AsyncErrors = require("../middlewares/catchAsyncError");


//create product

exports.createProduct = catchAsyncErrors(async (req,res,next)=>{

        
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    });
    
});
       

       



// get product

    exports.getAllProducts = async (req,res)=>{

        const products = await Product.find();

        res.status(200).json({Message:"Route is working fine"})
    };

        
    

    
    



    // update product 

    exports.updateProducts = async (req,res,next)=>{

       
            let product = await Product.findById(req.params.id);
            
            if(!product){
             return next(new Errorhander("Product not found",404));
            }

            product = await Product.findByIdandUpdate(req.params.id,req.body,{
                new:true,
                runvalidators:true,
                useFindAndModify:false
            });

            res.status(200)({
                success:true,
                product
            
            })

        };
    
      
// delete product

exports.deleteproduct = async(req,res,next) =>{

    let product = await Product.findById(req.param.id);

    if(!product){
        res.status(500).json({
          success:false,
          message: "product not found"
        })
      }

      await product.remove;

      res.status(200).json({

      success:true,
      message:"product removed successfully"
      })
};


// Get product by ID

exports.getproduct = async (req,res) => {

    let product = await Product.findById(req.params.id);

    if(!product){
        res.status(500).json({
          success:false,
          message: "product not found"
        })
      }

      res.status(200).json({

        success:true,
        message:"product found"
        })
};