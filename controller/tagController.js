const dotenv = require("dotenv").config();
const path = require("path");
const {
  readFileSync,
  writeFileSync
} = require("fs");

/**
 * @name Get tag
 * @Dis GET /api/v1/tag
 * @aaccess Public
 */

const Gettag = (req, res) => {
  // Get tag data From Json DB
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
  // Get tag data From Json DB
  const tag = JSON.parse(
    readFileSync(path.join(__dirname, "../database/tag.json"))
  );

  const {
    tag_name,
    reg_price,
    sale_price,
    Stock,
    photo
  } = req.body;

  //  Valaditon

  tag.push({
    id: Math.floor(Math.random() * 102030),
    ...req.body,
    status: true
  })


  writeFileSync(
    path.join(__dirname, "../database/tag.json"),
    JSON.stringify(tag)
  );
  res.status(201).json({
    message: "New tag Created",
  });

};


/**
 * @name Get Single tag
 * @Dis GET /api/v1/tag
 * @aaccess Public
 */

const singletag = (req, res) => {

  // Get tag data From Json DB

  const tag = JSON.parse(
    readFileSync(path.join(__dirname, "../database/tag.json"))
  );

  const single_tag = tag.find(data => data.id == req.params.id)


  if (single_tag) {
    res.status(200).json(single_tag)

  } else {
    res.status(404).json({
      message: " tag Not Found"
    })

  }

};


/**
 * @name Remove tag
 * @Dis DELETE /api/v1/tag:id
 * @aaccess Public
 */

const removetag = (req, res) => {

  // Get single tag data From Json DB

  const tag = JSON.parse(
    readFileSync(path.join(__dirname, "../database/tag.json"))
  );

  //  Valaditon

  if (tag.some((data) => data.id == req.params.id)) {
    const data = tag.filter((data) => data.id != req.params.id);

    writeFileSync(
      path.join(__dirname, "../database/tag.json"),
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
 * @name Edit Single  tag
 * @Dis PUT/PATCH /api/v1/tag:id
 * @aaccess Public
 */

const edittag = (req, res) => {
  // Get single tag data From Json DB
  const tag = JSON.parse(
    readFileSync(path.join(__dirname, "../database/tag.json"))
  );

  // Valadition

  if (tag.some(data => data.id == req.params.id)) {
    
    tag[tag.findIndex(data => data.id == req.params.id)] == {
      ...tag[tag.findIndex(data => data.id == req.params.id)],
      ...req.body,
    };
    writeFileSync(
      path.join(__dirname, "../database/tag.json"),
      JSON.stringify(tag)
    );
    res.status(200).json({
      message: "tag Update Success",
    });
  } else {
    res.status(404).json({
      message: "tag Update Faild",
    });
  }
};



// Export Module

module.exports = {
  Gettag,
  creattag,
  singletag,
  removetag,
  edittag
};