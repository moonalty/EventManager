require("dotenv").config();
const express = require("express");

const config = require("./config/config");

const PORT = process.env.PORT ?? 3000;

const mainRouter = require("./routes/main.route");
const categoriesRouter = require("./routes/APIroutes/categories.route");

const app = express();

config(app);

app.use("/", mainRouter);
app.use("/categories", categoriesRouter);

app.listen(PORT, () => {
  console.log(`**** BOBM HAS BEEN PLANTED on ${PORT}`);
});
