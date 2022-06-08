import express from "express";
import { deleteProducts, getProducts, getProductsById, saveProducts, updateProducts } from "../controllers/Product.js";

const router = express.Router();

// router.post("/register", register)
// router.post("/login", login)

router.get("/getproduct", getProducts)
router.get("/getproductid/:id", getProductsById)
router.post("/saveproduct", saveProducts)
router.patch("/updateproduct/:id", updateProducts)
router.delete('/deleteproduct/:id', deleteProducts);


export default router