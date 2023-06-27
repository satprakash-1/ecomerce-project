const Product = require("../models/productModels");


//create product

exports.createProduct = async (req,res,next)=>{

        try {
            const product = await Product.create(req.body);

            res.status(201).json({
                success:true,
                product
            })
            
        }
        catch (error) {
            res.status(200).json({
                sucess:false,
                message:"please enter a valid entry" 
            })

        }

}

// get product

    exports.getAllProducts = async (req,res)=>{

    try {
        const products = await Product.find();

        res.status(200).json({Message:"Route is working fine"})
    } 

        catch (error) {
        res.status(200).json({
            sucess:false,
            message:"please enter a valid entry" 
        })
    }

    
    }



    // update product 

    exports.updateProducts = async (req,res,next)=>{

        try {
            let product = await Product.findById(req.params.id);
            
            if(!product){
              res.status(500).json({
                success:false,
                message: "product not found"
              })
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

        } 
    
            catch (error) {
            res.status(200).json({
                sucess:false,
                message:"please enter a valid entry" 
            })
        }
    
        
        }
    
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

      
}