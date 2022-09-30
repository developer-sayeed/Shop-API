const dotenv = require("dotenv").config();
const path = require("path");
const {
  readFileSync,
  writeFileSync
} = require("fs");

/**
 * @name Get brand
 * @Dis GET /api/v1/brand
 * @aaccess Public
 */

const Getbrand = (req, res) => {
  // Get brand data From Json DB
  const brand = JSON.parse(
    readFileSync(path.join(__dirname, "../database/brand.json"))
  );

  //  Data Send
  res.status(200).json(brand);
};

/**
 * @name Create a brand
 * @Dis GET /api/v1/brand
 * @aaccess Public
 */

const creatbrand = (req, res) => {
  // Get brand data From Json DB
  const brand = JSON.parse(
    readFileSync(path.join(__dirname, "../database/brand.json"))
  );

  const {
    brand_name,
    reg_price,
    sale_price,
    Stock,
    photo
  } = req.body;

  //  Valaditon

  brand.push({
    id: Math.floor(Math.random() * 102030),
    ...req.body,
    status: true
  })


  writeFileSync(
    path.join(__dirname, "../database/brand.json"),
    JSON.stringify(brand)
  );
  res.status(201).json({
    message: "New brand Created",
  });

};


/**
 * @name Get Single brand
 * @Dis GET /api/v1/brand
 * @aaccess Public
 */

const singlebrand = (req, res) => {

  // Get brand data From Json DB

  const brand = JSON.parse(
    readFileSync(path.join(__dirname, "../database/brand.json"))
  );

  const single_brand = brand.find(data => data.id == req.params.id)


  if (single_brand) {
    res.status(200).json(single_brand)

  } else {
    res.status(404).json({
      message: " brand Not Found"
    })

  }

};


/**
 * @name Remove brand
 * @Dis DELETE /api/v1/brand:id
 * @aaccess Public
 */

const removebrand = (req, res) => {

  // Get single brand data From Json DB

  const brand = JSON.parse(
    readFileSync(path.join(__dirname, "../database/brand.json"))
  );

  //  Valaditon

  if (brand.some((data) => data.id == req.params.id)) {
    const data = brand.filter((data) => data.id != req.params.id);

    writeFileSync(
      path.join(__dirname, "../database/brand.json"),
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
 * @name Edit Single  brand
 * @Dis PUT/PATCH /api/v1/brand:id
 * @aaccess Public
 */

const editbrand = (req, res) => {
  // Get single brand data From Json DB
  const brand = JSON.parse(
    readFileSync(path.join(__dirname, "../database/brand.json"))
  );

  // Valadition

  if (brand.some(data => data.id == req.params.id)) {
    
    brand[brand.findIndex(data => data.id == req.params.id)] == {
      ...brand[brand.findIndex(data => data.id == req.params.id)],
      ...req.body,
    };
    writeFileSync(
      path.join(__dirname, "../database/brand.json"),
      JSON.stringify(brand)
    );
    res.status(200).json({
      message: "brand Update Success",
    });
  } else {
    res.status(404).json({
      message: "brand Update Faild",
    });
  }
};



// Export Module

module.exports = {
  Getbrand,
  creatbrand,
  singlebrand,
  removebrand,
  editbrand
};