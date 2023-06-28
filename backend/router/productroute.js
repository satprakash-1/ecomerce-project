const express = require("express");
const { getAllProducts,createProduct, updateProducts, deleteproduct, getproduct } = require("../controller/productcontroller");

const router = express.Router();

router.route("/products").get(getAllProducts).get(getproduct);
router.route("/products/new").post(createProduct);
router.route("/products/:id").put(updateProducts);
router.route("/products/:id").delete(deleteproduct);




module.exports = router
