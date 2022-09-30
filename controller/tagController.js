const dotenv = require("dotenv").config();
const path = require("path");
const { readFileSync, writeFileSync } = require("fs");

/**
 * @name Get tag
 * @Dis GET /api/v1/tag
 * @aaccess Public
 */

const Gettag = (req, res) => {
  // Get Tag data From Json DB
  const tag = JSON.parse(
    readFileSync(path.join(__dirname, "../database/tag.json"))
  );

  //  Data Send
  res.status(200).json(tag);
};

/**
 * @name Create a tag
 * @Dis GET /api/v1/tag
 * @aaccess Public
 */

const creattag = (req, res) => {
  // Get Tag data From Json DB
  const tag = JSON.parse(
    readFileSync(path.join(__dirname, "../database/tag.json"))
  );

  const { name } = req.body;


    tag.push({
      id: Math.floor(Math.random() * 20304),
      ...req.body,
      status: true,
    });

    writeFileSync(
      path.join(__dirname, "../database/tag.json"),
      JSON.stringify(tag)
    );
    res.status(201).json({
      message: "New tag Created",
    });
  
};

// Export Module

module.exports = {
  Gettag,
  creattag,
};
