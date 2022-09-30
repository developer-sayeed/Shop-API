const dotenv = require("dotenv").config();
const path = require("path");
const { readFileSync, writeFileSync } = require("fs");

/**
 * @name Get Brand
 * @Dis GET /api/v1/brand
 * @aaccess Public
 */

const GetBrand = (req, res) => {
  // Get Category data From Json DB
  const brand = JSON.parse(
    readFileSync(path.join(__dirname, "../database/brand.json"))
  );

  //  Data Send
  res.status(200).json(brand);
};

/**
 * @name Create a Brand
 * @Dis GET /api/v1/brand
 * @aaccess Public
 */

const creatBrand = (req, res) => {
  // Get Category data From Json DB
  const brand = JSON.parse(
    readFileSync(path.join(__dirname, "../database/brand.json"))
  );

  const { name, status } = req.body;

  //  Valaditon

  if (!name) {
    res.status(401).json({
      message: "Brand Name is requare",
    });
  } else {
    brand.push({
      id: Math.floor(Math.random() * 1020304),
      name: name,
      status: true,
    });

    writeFileSync(
      path.join(__dirname, "../database/brand.json"),
      JSON.stringify(brand)
    );
    res.status(201).json({
      message: "New Brand Created",
    });
  }
};

// Export Module

module.exports = {
  GetBrand,
  creatBrand,
};
