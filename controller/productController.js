const dotenv = require("dotenv").config();
const path = require("path");
const { readFileSync, writeFileSync } = require("fs");

/**
 * @name Get Product
 * @Dis GET /api/v1/Product
 * @aaccess Public
 */

const GetProduct = (req, res) => {
  // Get Category data From Json DB
  const Product = JSON.parse(
    readFileSync(path.join(__dirname, "../database/product.json"))
  );

  //  Data Send
  res.status(200).json(Product);
};

/**
 * @name Create a Product
 * @Dis GET /api/v1/Product
 * @aaccess Public
 */

const creatProduct = (req, res) => {
  // Get Category data From Json DB
  const Product = JSON.parse(
    readFileSync(path.join(__dirname, "../database/product.json"))
  );

  const { product_name, reg_price, sale_price, Stock, photo } = req.body;

  //  Valaditon



  Product.push({
    id : Math.floor(Math.random() *102030) ,
    ...req.body,
    status : true
  })


  writeFileSync(
    path.join(__dirname, "../database/product.json"),
    JSON.stringify(Product)
  );
  res.status(201).json({
    message: "New Product Created",
  });

};

// Export Module

module.exports = {
  GetProduct,
  creatProduct,
};
