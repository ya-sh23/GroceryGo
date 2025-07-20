import express from "express";
import {
  addProduct,
  changeStock,
  productById,
  productList,
} from "../controllers/productController.js";
import { upload } from "../configs/multer.js";
import authSeller from "../middlewares/authSeller.js";

const productRotuer = express.Router();

productRotuer.post("/add", upload.array("images"), authSeller, addProduct);
productRotuer.get("/list", productList);
productRotuer.get("/id", productById);
productRotuer.post("/stock", authSeller, changeStock);

export default productRotuer;
