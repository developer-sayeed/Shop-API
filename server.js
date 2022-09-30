const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const categoryRouter = require("./routes/Product/categoryRoutes");
const brandRouter = require("./routes/Product/brandRoutes");
const productRouter = require("./routes/Product/productRoutes");
const tagRouter = require("./routes/Product/tagRouter");


//  Enviroment Varibale

dotenv.config();
const PORT = process.env.PORT || 4000;

//  Express init

const app = express();

// Data manage

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//  Express Folder Static

app.use(express.static("public"));






// Routing

app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/brand", brandRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/tag", tagRouter);

// server Listen

app.listen(PORT, () => {
  console.log(`server is runing port ${PORT}`.bgGreen.black);
});
