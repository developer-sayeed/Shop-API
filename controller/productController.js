const dotenv = require("dotenv").config();
const path = require("path");
const {
  readFileSync,
  writeFileSync
} = require("fs");

/**
 * @name Get Product
 * @Dis GET /api/v1/Product
 * @aaccess Public
 */

const GetProduct = (req, res) => {
  // Get product data From Json DB
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
  // Get product data From Json DB
  const Product = JSON.parse(
    readFileSync(path.join(__dirname, "../database/product.json"))
  );

  const {
    product_name,
    reg_price,
    sale_price,
    Stock,
    photo
  } = req.body;

  //  Valaditon

  Product.push({
    id: Math.floor(Math.random() * 102030),
    ...req.body,
    status: true
  })


  writeFileSync(
    path.join(__dirname, "../database/product.json"),
    JSON.stringify(Product)
  );
  res.status(201).json({
    message: "New Product Created",
  });

};


/**
 * @name Get Single Product
 * @Dis GET /api/v1/Product
 * @aaccess Public
 */

const singleProduct = (req, res) => {

  // Get product data From Json DB

  const Product = JSON.parse(
    readFileSync(path.join(__dirname, "../database/product.json"))
  );

  const single_product = Product.find(data => data.id == req.params.id)


  if (single_product) {
    res.status(200).json(single_product)

  } else {
    res.status(404).json({
      message: " Product Not Found"
    })

  }

};


/**
 * @name Remove product
 * @Dis DELETE /api/v1/product:id
 * @aaccess Public
 */

const removeproduct = (req, res) => {

  // Get single product data From Json DB

  const product = JSON.parse(
    readFileSync(path.join(__dirname, "../database/product.json"))
  );

  //  Valaditon

  if (product.some((data) => data.id == req.params.id)) {
    const data = product.filter((data) => data.id != req.params.id);

    writeFileSync(
      path.join(__dirname, "../database/product.json"),
      JSON.stringify(data)
    );

    res.status(200).json({
      message: "Caregory Remove Success",
    });
  } else {
    res.status(401).json({
      message: "Data Not Found",
    });
  }
};




/**
 * @name Edit Single  product
 * @Dis PUT/PATCH /api/v1/product:id
 * @aaccess Public
 */

const editProduct = (req, res) => {
  // Get single product data From Json DB
  const product = JSON.parse(
    readFileSync(path.join(__dirname, "../database/product.json"))
  );

  // Valadition

  if (product.some(data => data.id == req.params.id)) {
    
    product[product.findIndex(data => data.id == req.params.id)] == {
      ...product[product.findIndex(data => data.id == req.params.id)],
      ...req.body,
    };
    writeFileSync(
      path.join(__dirname, "../database/product.json"),
      JSON.stringify(product)
    );
    res.status(200).json({
      message: "product Update Success",
    });
  } else {
    res.status(404).json({
      message: "product Update Faild",
    });
  }
};



// Export Module

module.exports = {
  GetProduct,
  creatProduct,
  singleProduct,
  removeproduct,
  editProduct
};