const dotenv = require("dotenv").config();
const path = require("path");
const {
  readFileSync,
  writeFileSync
} = require("fs");

/**
 * @name Get Category
 * @Dis GET /api/v1/Category
 * @aaccess Public
 */

const GetCategory = (req, res) => {
  // Get Category data From Json DB
  const Category = JSON.parse(
    readFileSync(path.join(__dirname, "../database/category.json"))
  );

  //  Data Send
  res.status(200).json(Category);
};

/**
 * @name Create a Category
 * @Dis GET /api/v1/Category
 * @aaccess Public
 */

const creatCategory = (req, res) => {
  // Get Category data From Json DB
  const Category = JSON.parse(
    readFileSync(path.join(__dirname, "../database/category.json"))
  );

  const {
    name,
    status
  } = req.body;

  //  Valaditon

  if (!name) {
    res.status(401).json({
      message: "Name is requare",
    });
  } else {
    Category.push({
      id: Math.floor(Math.random() * 102030),
      name: name,
      status: true,
    });

    writeFileSync(
      path.join(__dirname, "../database/category.json"),
      JSON.stringify(Category)
    );
    res.status(201).json({
      message: "New Category Created",
    });
  }
};

/**
 * @name Get Single  Category
 * @Dis GET /api/v1/Category:id
 * @aaccess Public
 */

const getCategory = (req, res) => {
  // Get single Category data From Json DB
  const Category = JSON.parse(
    readFileSync(path.join(__dirname, "../database/category.json"))
  );

  const singleCategory = Category.find((data) => data.id == req.params.id);

  //  Valaditon
  if (singleCategory) {
    res.status(200).json(singleCategory);
  } else {
    res.status(401).json({
      message: " Single Category not found",
    });
  }
};

/**
 * @name Remove Category
 * @Dis DELETE /api/v1/Category:id
 * @aaccess Public
 */

const removeCategory = (req, res) => {

  // Get single Category data From Json DB
  
  const Category = JSON.parse(
    readFileSync(path.join(__dirname, "../database/category.json"))
  );

  //  Valaditon

  if (Category.some((data) => data.id == req.params.id)) {
    const data = Category.filter((data) => data.id != req.params.id);

    writeFileSync(
      path.join(__dirname, "../database/category.json"),
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
 * @name Edit Single  Category
 * @Dis PUT/PATCH /api/v1/Category:id
 * @aaccess Public
 */

const editCategory = (req, res) => {
  // Get single Category data From Json DB
  const Category = JSON.parse(
    readFileSync(path.join(__dirname, "../database/category.json"))
  );

  // Valadition

  if (Category.some((data) => data.id == req.params.id)) {
    Category[Category.findIndex((data) => data.id == req.params.id)] == {
      ...Category[Category.findIndex((data) => data.id == req.params.id)],
      ...req.body,
    };
    writeFileSync(
      path.join(__dirname, "../database/category.json"),
      JSON.stringify(Category)
    );
    res.status(200).json({
      message: "Category Update Success",
    });
  } else {
    res.status(404).json({
      message: "Category Update Faild",
    });
  }
};

// Export Module

module.exports = {
  GetCategory,
  creatCategory,
  getCategory,
  removeCategory,
  editCategory,
};