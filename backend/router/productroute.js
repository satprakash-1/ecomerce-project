const express = require("express");
const { getAllProducts,createProduct, updateProducts, deleteproduct, getproduct } = require("../controller/productcontroller");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/products").get( getAllProducts).get(getproduct);
router.route("/products/new").post(isAuthenticated,createProduct);
router.route("/products/:id").put(isAuthenticated,updateProducts);
router.route("/products/:id").delete(isAuthenticated,deleteproduct);




module.exports = router
